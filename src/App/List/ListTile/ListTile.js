import React from 'react';
import './ListTile.css';
import hopdoddy from '../../../images/hopdoddy.png';
import config from '../../config';

let placeholder = config.defaultRestaurant;

const ListTile = ({
    name=placeholder.name,
    category=placeholder.category,
    image=hopdoddy }) => {
    return (
        <div className="list-tile" style={{ background: `url(${image}) no-repeat center center`, backgroundSize: `100% auto` }}>
            <div className="list-tile__name">{ name }</div>
            <div className="list-tile__category">{ category }</div>
        </div>
    );
};

export default ListTile;