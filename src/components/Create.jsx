import React, { useState } from "react";
import Nav from "./Nav";
import { supabase } from "../client";

const Create = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [profession, setProfession] = useState("");
    const [imposter, setImposter] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.from("Crewmates").upsert([
                {
                    name,
                    color,
                    profession,
                    imposter,
                },
            ]);

            if (error) {
                console.error("Error creating Crewmate:", error);
            } else {
                console.log("Crewmate created successfully:", data);
                window.location.href = "/create"; 
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <Nav />
            <div className="create">
                <div className="">
                    <h1>Add Crewmates Here!</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label> <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor="color">Color</label><br />
    
                        <select onChange={(e) => setColor(e.target.value)} id="color">
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
                        <br/>
                        <br/>

                        <label htmlFor="profession">Profession</label><br />
                        <input
                            type="text"
                            id="profession"
                            name="profession"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor="imposter">Imposter</label> <br />
                        <input
                            type="checkbox"
                            id="imposter"
                            name="imposter"
                            checked={imposter}
                            onChange={(e) => setImposter(e.target.checked)}
                        />
                        <br />
                        <br />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
