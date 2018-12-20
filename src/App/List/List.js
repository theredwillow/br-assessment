import React from 'react';

import ListTile from './ListTile/ListTile';
import DetailTile from './DetailTile/DetailTile';

class List extends React.Component {

    detailView = () => {
        let activeIndex = this.props.active;
        let restaurant = this.props.restaurants[activeIndex];
        return (<DetailTile
            name={restaurant.name}
            category={restaurant.category}
            streetAddress={restaurant.streetAddress}
            city={restaurant.city}
            state={restaurant.state}
            zip={restaurant.zip}
            phone={restaurant.phone}
            twitter={restaurant.twitter}
        />);
    }

    listView = () => {
        let restaurants = this.props.restaurants;
        let newList = [];
        for (let i = 0; i < restaurants.length; i++) {
            let restaurant = restaurants[i];
            newList.push(<ListTile
                name={restaurant.name}
                category={restaurant.category}
            />);
        }
        return (<div className="list">{newList}</div>);
    }

    constructor(props) {
      super(props);
    }

    render() {
        return (this.props.active) ? this.detailView() : this.listView();
    }

};

export default List;