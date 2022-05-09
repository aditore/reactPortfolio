import React from 'react';

function Footer() {
    return (
        <footer className='footerInline'>
            <nav className="bottomOfPage navbar navbar-expand-lg justify-content-between">
                <div className="resume px-2">
                    <h5>Resume</h5>
                    <a target="_blank" href="./assets/images/anthonyGeneralResume.pdf" className="resumeBtn btn btn-primary">General</a>
                    <a target="_blank" href="./assets/images/anthonyResume.pdf" className="resumeBtn btn btn-primary">Technical</a>
                </div>
                <ul className="footerUl navbar-nav">
                    <li className='footerLi'>
                        <div className="toolTip">
                            <a className="bi bi-envelope-fill" href="mailto:anthonyditore@gmail.com?">
                                <span className="toolTipText">Click to send me an e-mail!</span>
                            </a>
                        </div>
                    </li>
                    <li className='footerLi'>
                        <div className="toolTip">
                            <a className="bi bi-phone" href='/reactPortfolio'>
                                <span className="toolTipText">Click to reach me by my mobile number!</span>    
                            </a>
                        </div>
                    </li>
                    <li className='footerLi'>
                        <div className="toolTip">
                            <a className="bi bi-github" href="https://github.com/aditore">
                                <span className="toolTipText">Click to check out my Github!</span>
                            </a>
                        </div>
                    </li>
                    <li className='footerLi'>
                        <div className="toolTip">
                            <a className="bi bi-linkedin" href="https://www.linkedin.com/in/anthony-ditore-ab0636225/">
                                <span className="toolTipText">Click to check out my LinkedIn!</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;