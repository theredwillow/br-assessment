import React from 'react';
import config from '../config';
import './Header.css';

import { closeDetail } from '../../actions';
import store from '../../stores';

import iconBack from '../../images/ic_webBack@2x.png';
import iconMap from '../../images/icon_map@2x.png';

const Header = () => (
    <div id="header">
        <div id="header__back-tile" onClick={ () => { store.dispatch(closeDetail); } }>
            <img src={ iconBack } alt="< Back" />
        </div>
        <div id="header__app-name">{ config.appName }</div>
        <div id="header__map-tile">
            <img src={ iconMap } alt="Map" />
        </div>
    </div>
);

export default Header;