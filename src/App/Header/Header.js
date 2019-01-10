import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import config from '../config';
import './Header.css';

import iconBack from '../../images/ic_webBack@2x.png';
import iconMap from '../../images/icon_map@2x.png';

const Header = ({location}) => (
    <div id="header">
        { location && (
            <Link id="header__back-tile" to={ location }>
                <img src={ iconBack } alt="< Back" />
            </Link>
        ) }
        <div id="header__app-name">{ config.appName }</div>
        <div id="header__map-tile">
            <img src={ iconMap } alt="Map" />
        </div>
    </div>
);

export default Header;