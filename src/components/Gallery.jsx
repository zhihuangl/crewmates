import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import Nav from "./Nav";
import { supabase } from "../client";

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        async function fetchCrewmates() {
            try {
                const { data, error } = await supabase.from("Crewmates").select("*");
                if (error) {
                    console.error("Error fetching Crewmates:", error);
                } else {
                    setCrewmates(data);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }

        fetchCrewmates();
    }, []);

    // Function to delete a crewmate
    const deleteCrewmate = async (id) => {
        try {
            const { error } = await supabase.from("Crewmates").delete().eq("id", id);
            if (error) {
                console.error("Error deleting Crewmate:", error);
            } else {
                // Remove the deleted crewmate from the state
                setCrewmates((prevCrewmates) => prevCrewmates.filter((crewmate) => crewmate.id !== id));
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <Nav />
            <div className="gallery">
                <h1>Your Crewmate Gallery</h1>
                <div className="crewmate-cards">
                    {crewmates.map((crewmate) => (
                        <div className="crewmate-card" key={crewmate.id}>
                            <p>Name: {crewmate.name}</p>
                            <p>Color: {crewmate.color}</p>
                            <p>Profession: {crewmate.profession}</p>
                            <p>Imposter: {crewmate.imposter ? "Yes" : "No"}</p>
                            <img src={`./src/media/${crewmate.color}.png`}/>
                            <div>
                                <Link className='edit-button' to={`/edit/${crewmate.id}`}>Edit</Link> {/* Use React Router Link for navigation */}
                                <button className='delete-button' onClick={() => deleteCrewmate(crewmate.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
