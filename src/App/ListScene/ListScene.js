import React from 'react';

import ListTile from './ListTile/ListTile';

const ListScene = ({restaurants}) => {
    if (!restaurants || !restaurants.length) {
        return (<div>(No restaurants found.)</div>);
    }
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

export default ListScene;