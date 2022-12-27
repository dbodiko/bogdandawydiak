import './style.css'

import SlavaUkraine from './../../img/ForceUkraine.png'

import inst from "../../img/icons/instagram.svg";
import github from "../../img/icons/gitHub.svg";
import linkedin from "../../img/icons/linkedIn.svg";


const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://www.instagram.com/dbodiko/"
                                                        target="_blank"
                                                        rel="noreferrer"><img src={inst} alt="instagram/dbodiko"/></a>
                        </li>
                        <li className="social__item"><a href="https://github.com/dbodiko?tab=repositories"
                                                        target="_blank"
                                                        rel="noreferrer"><img src={github} alt="GitHub"/></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/bogdan-dawydiak/"
                                                        target="_blank"
                                                        rel="noreferrer"><img src={linkedin} alt="LinkedIn"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p><img src={SlavaUkraine} alt="Slava Ukraini"/></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;