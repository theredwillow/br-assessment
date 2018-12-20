import React from 'react';
import config from '../config';
import './Header.css';
import iconMap from '../../images/icon_map@2x.png';

const Header = () => (
    <div id="header">
        <div id="header__app-name">{ config.appName }</div>
        <div id="header__map-tile"><img src={iconMap} alt="Map"></img></div>
    </div>
);

export default Header;