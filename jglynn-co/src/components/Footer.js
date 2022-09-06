// import ReactDOM from 'react-dom';
import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import styles from '../assets/styles/styles';






function Footer() {
    const facebook = (e) => {
        e.preventDefault();
        window.open(
            'https://www.facebook.com/jglynnandco',
            '_blank');
    };
return (
    <footer>
        <div style={styles.icons}>
<FontAwesomeIcon
icon={faFacebook}
style={styles.hover}
size='6x'
onClick={facebook}/>
        </div>

        <h3 style={styles.h3}>J. Glynn & Co</h3>
    </footer>
)
}

export default Footer;