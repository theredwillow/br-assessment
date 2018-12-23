import React from 'react';
import './DetailTile.css';
import config from '../../config';

let placeholder = config.defaultRestaurant;

const DetailTile = ({
    name=placeholder.name,
    category=placeholder.category,
    addressOne=placeholder.addressOne,
    addressTwo=placeholder.addressTwo,
    phone=placeholder.phone,
    twitter=placeholder.twitter }) => {
    return (
        <div className="detail-tile">
            <div className="detail-tile__map"></div>
            <div className="detail-tile__name-area">
                <div className="detail-tile__name">{ name }</div>
                <div className="detail-tile__category">{ category }</div>
            </div>
            <div className="detail-tile__info">
                <div className="detail-tile__address">
                    { addressOne }<br/>
                    { addressTwo }
                </div>
                <div className="detail-tile__phone">{ phone }</div>
                <div className="detail-tile__twitter">@{ twitter }</div>
            </div>
        </div>
    );
};

export default DetailTile;