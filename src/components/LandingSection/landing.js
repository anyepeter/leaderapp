import React from 'react'
import '../../style/landing.css'
import { Link } from 'react-router-dom';
import myGif from './srollDown.gif';
const Landing = () => {
    return (
        <>
        <main>
        <section className='landing-section'>
            <div className='intro-text'>
                <h1 className='text-landing'>12-weeks <span className='span'>AWS</span> Workshop</h1>
                <h3 className='challenge'>Challenges</h3>
                <div className='para-container'>
                <p className='para-text'>Challenge yourself by leading with the activities and enjoy the numerous rewards</p>
                </div>
                <div>
                <Link to="/profile" className='button'>Get Started!</Link>
                </div>
            </div>
            <img className='image-program' src={myGif} />
        </section>
        </main>
        </>
    );
}


export default Landing;