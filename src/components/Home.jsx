import React from "react";

import Nav from "./Nav";
const Home = () => {
    return (
        <div>
            <Nav />
            <div className="home">
                <div className="">
                    <h1>Welcome to the Crewmate Creator</h1>
                    <h5>Here is where you can create your very own set of crewmates!</h5>
                    <img className="home-img" src="./src/media/crewmates.png"></img>
                    <br/>
                    <img className="home-img" src="./src/media/shhh.jpeg"></img>
                </div>
            </div>
        </div>

    )
}

export default Home;
