import React from 'react';
import App from '../../App';
import Logo from '../../assets/img/MORDORFLIX_LOGO.png';
import './Menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MordorFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
