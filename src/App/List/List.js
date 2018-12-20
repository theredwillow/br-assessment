import React from 'react';

import ListTile from './ListTile/ListTile';

const List = (props) => {

    let createList = (restaurants) => {
        let newList = [];
        for (let i = 0; i < restaurants.length; i++) {
            newList.push(<ListTile name={restaurants[i].name} category={restaurants[i].category} />);
        }
        return newList;
    };

    return (<div className="list"> {createList(props.restaurants)} </div>);

};

export default List;