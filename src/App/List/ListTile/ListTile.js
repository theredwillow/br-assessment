import React from 'react';
import './ListTile.css';
import hopdoddy from '../../../images/hopdoddy.png';

const ListTile = ({name="Restaurant Name", category="Category Type", image=hopdoddy}) => {
    return (
        <div className="list-tile" style={{ background: `url(${hopdoddy}) no-repeat center center`, backgroundSize: `100% auto` }}>
            <div className="list-tile__name">{ name }</div>
            <div className="list-tile__category">{ category }</div>
        </div>
    );
};

export default ListTile;