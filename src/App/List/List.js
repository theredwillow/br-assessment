import React from 'react';

import ListTile from './ListTile/ListTile';
import DetailTile from './DetailTile/DetailTile';

import example from './example.json';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: this.props.restaurants || example.restaurants
        };
    }

    componentWillMount() {
        // Allow-Control-Allow-Origin: * Chrome Extension for localhost testing
        fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
          .then(res => res.json())
          .then(data => this.setState({ restaurants: data.restaurants }));
    }

    detailView = () => {
        let activeIndex = this.state.active;
        let restaurant = this.state.restaurants[activeIndex];
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
        let restaurants = this.state.restaurants;
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
        return (this.state.active) ? this.detailView() : this.listView();
    }

};

export default List;