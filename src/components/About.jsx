import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <div className='about'l>
                <div className="about__container1">
                    <img className='a-img1' src="./pic.jpeg" alt="img" />
                </div>
                <div className="about__container2">
                    <h1 className='h11'>Daniel</h1>
                    <p>Frontend Developer | React JS Developer | Resonsive Designer |<br />
                        Web Developer</p><br/>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m Daniel, a Frontend Developer specializing in React.js <br />
                        and responsive design. I create user-friendly websites that <br />
                        look great on any device. With a passion for clean code and <br />
                        innovative solutions, thrive on collaboration and continuous <br />
                        learning. In my free time, I enjoy playing drums, staying fit,<br />
                        and experimenting in the kitchen.<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default About