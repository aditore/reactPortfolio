import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="homePage px-2">
            <img className="twinsImage" alt="twins" src="./images/jpg/twins.jpg"></img> 
            <section className="homePage col-9">
                <p>Hello! My name is Anthony Ditore! Welcome to my website!</p>
                <p>Please read <Link to="/aboutMe">about me</Link> and take a gander at my <Link to="/myWork">works</Link>!</p>
                <p>Feel free to <Link to="/contact">contact me</Link> if you have an opportunity or would like to collaborate!</p>
            </section>
        </div>
    )
}

export default Home;