import React from 'react';

import ListTile from './ListTile/ListTile';
import DetailTile from './DetailTile/DetailTile';

export const DetailView = (restaurant) => {
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

export const ListView = (restaurants) => {
    let newList = [];
    for (let i = 0; i < restaurants.length; i++) {
        let restaurant = restaurants[i];
        newList.push(<ListTile key={i.toString()}
            index={i.toString()}
            name={restaurant.name}
            category={restaurant.category}
            image={restaurant.backgroundImageURL}
        />);
    }
    return (<div className="list">{newList}</div>);
};

const List = ({restaurants, active}) =>
    (active) ? DetailView(restaurants[active]) : ListView(restaurants);
export default List;