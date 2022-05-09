import React from 'react';

function AboutMePage(props) {
    return (
        <div className='aboutMe px-2 col-12'>
            <section className='col-5 px-2'>
                <p>My name is Anthony Ditore. I come from a long line of hardworkers. I have only recently gotten into coding, so bear with the lack of content.</p>
                <p>Some things I do don't just include my passion for learning new things. I am currently managing a Quiznos and can make you a pretty mean custom sandwich.</p>
                <p>I hope you enjoy my portfolio website and reach out to ask me questions in the future!</p>
                <p>Feel free to click the links at the bottom of the page to get into <a href="/contact">contact with me</a>!</p>
            </section>
            <img className='siblingsImage px-2' alt="siblings" src='./images/png/snow_sibling.png'></img>
        </div>
    )
}

export default AboutMePage;