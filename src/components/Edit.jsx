import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Nav from './Nav';

const Edit = () => {
    const { key } = useParams();
    const [crewmate, setCrewmate] = useState({});
    const [editedCrewmate, setEditedCrewmate] = useState({});

    useEffect(() => {
        async function fetchCrewmate() {
            try {
                const { data, error } = await supabase
                    .from('Crewmates')
                    .select('*')
                    .eq('id', key);

                if (error) {
                    console.error('Error fetching Crewmate:', error);
                    return;
                }

                if (data.length > 0) {
                    const fetchedCrewmate = data[0];
                    setCrewmate(fetchedCrewmate);
                    setEditedCrewmate(fetchedCrewmate);
                } else {
                    console.error('Crewmate not found.');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

        fetchCrewmate();
    }, [key]);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setEditedCrewmate({ ...editedCrewmate, [name]: newValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data, error } = await supabase
                .from('Crewmates')
                .upsert([editedCrewmate]);

            if (error) {
                console.error('Error updating Crewmate:', error);
                return;
            }

            console.log('Crewmate updated successfully');
            window.location.href = "/gallery"; 
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <Nav />
            <div className="edit">
                <div className="crewmate-info">
                    <h1>Edit Crewmate</h1>
                    <p>Name: {crewmate.name}</p>
                    <p>Color: {crewmate.color}</p>
                    <p>Profession: {crewmate.profession}</p>
                    <p>Imposter: {crewmate.imposter ? 'Yes' : 'No'}</p>
                </div>

                <div className="edit-crewmate">
                    <h2>Edit Crewmate Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={editedCrewmate.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="color">Color:</label>
                            <select
                                id="color"
                                name="color"
                                value={editedCrewmate.color}
                                onChange={handleInputChange}
                            >
                                <option value={""}>Select a color</option>
                                <option value={"blue"}>Blue</option>
                                <option value={"purple"}>Purple</option>
                                <option value={"pink"}>Pink</option>
                                <option value={"cyan"}>Cyan</option>
                                <option value={"black"}>Black</option>
                                <option value={"white"}>White</option>
                                <option value={"lime"}>Lime</option>
                                <option value={"red"}>Red</option>
                                <option value={"brown"}>Brown</option>
                                <option value={"orange"}>Orange</option>
                                <option value={"yellow"}>Yellow</option>
                                <option value={"green"}>Green</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="profession">Profession:</label>
                            <input
                                type="text"
                                id="profession"
                                name="profession"
                                value={editedCrewmate.profession}
                                onChange={handleInputChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="imposter">Imposter:</label>
                            <input
                                type="checkbox"
                                id="imposter"
                                name="imposter"
                                checked={editedCrewmate.imposter}
                                onChange={handleInputChange}
                            />
                        </div>
                        <br />
                        <button type="submit">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
