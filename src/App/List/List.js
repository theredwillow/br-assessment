import React from 'react';

import ListTile from './ListTile/ListTile';
import DetailTile from './DetailTile/DetailTile';

class List extends React.Component {

    detailView = () => {
        let activeIndex = this.props.active;
        let restaurant = this.props.restaurants[activeIndex];
        let [addressOne, addressTwo] = restaurant.formattedAddress;
        return (<DetailTile
            name={restaurant.name}
            category={restaurant.category}
            addressOne={addressOne}
            addressTwo={addressTwo}
            phone={restaurant.contact.formattedPhone}
            twitter={restaurant.contact.twitter}
        />);
    }

    listView = () => {
        let restaurants = this.props.restaurants;
        let newList = [];
        for (let i = 0; i < restaurants.length; i++) {
            let restaurant = restaurants[i];
            newList.push(<ListTile key={i.toString()}
                name={restaurant.name}
                category={restaurant.category}
                image={restaurant.backgroundImageURL}
            />);
        }
        return (<div className="list">{newList}</div>);
    }

    render() {
        return (this.props.active) ? this.detailView() : this.listView();
    }

};

export default List;