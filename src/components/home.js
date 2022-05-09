import React from "react";

function Home() {
    return(
        <div className="homePage px-2">
            <img className="twinsImage" alt="twins" src="./images/jpg/twins.jpg"></img> 
            <section className="homePage col-9">
                <p>Hello! My name is Anthony Ditore! Welcome to my website!</p>
                <p>Please read <a href="/reactPortfolio/aboutMe">about me</a> and take a gander at my <a href="/reactPortfolio/myWork">works</a>!</p>
                <p>Feel free to <a href="/reactPortfolio/contact">contact me</a> if you have an opportunity or would like to collaborate!</p>
            </section>
        </div>
    )
}

export default Home;