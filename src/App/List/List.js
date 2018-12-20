import React from 'react';

import ListTile from './ListTile/ListTile';


class List extends React.Component {

    detailView = () => {
        let activeIndex = this.props.active;
        let restaurant = this.props.restaurants[activeIndex];
        return (<ListTile name={restaurant.name} category={restaurant.category} />);
    }

    listView = () => {
        let restaurants = this.props.restaurants;
        let newList = [];
        for (let i = 0; i < restaurants.length; i++) {
            newList.push(<ListTile name={restaurants[i].name} category={restaurants[i].category} />);
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