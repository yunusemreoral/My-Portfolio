import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
        
    
        </Link>
        <h4>Y E O</h4>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/oralyunusemre/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
           
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/yunusemreoral'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://x.com/yeo038'>
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar