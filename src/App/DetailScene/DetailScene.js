import React from 'react';
import './DetailScene.css';
import config from '../config';

const placeholder = config.defaultRestaurant;

const DetailTile = ({
    name=placeholder.name,
    category=placeholder.category,
    addressOne=placeholder.addressOne,
    addressTwo=placeholder.addressTwo,
    phone=placeholder.phone,
    twitter=placeholder.twitter
    }) => (
    <div className="detail">
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

const DetailScene = (props) => {
    let restaurant = props.restaurants;
    restaurant.location = restaurant.location || {};
    restaurant.contact = restaurant.contact || {};
    return (<DetailTile
        name={restaurant.name}
        category={restaurant.category}
        addressOne={restaurant.location.formattedAddress[0]}
        addressTwo={restaurant.location.formattedAddress[1]}
        phone={restaurant.contact.formattedPhone}
        twitter={restaurant.contact.twitter}
    />);
  };
export default DetailScene;