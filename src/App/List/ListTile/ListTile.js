import React from 'react';
import './ListTile.css';
import hopdoddy from '../../../images/hopdoddy.png';
import config from '../../config';

import { openDetail } from '../../../actions';
import store from '../../../stores';

const placeholder = config.defaultRestaurant;

export const dispatchDetail = (index) => { store.dispatch(openDetail(index)); };

const ListTile = ({
    index=0,
    name=placeholder.name,
    category=placeholder.category,
    image=hopdoddy
    }) => (
    <div
        className="list-tile"
        style={{ background: `url(${ image }) no-repeat center center` }}
        onClick={ () => { dispatchDetail(index); } }
    >
        <div className="list-tile__name">{ name }</div>
        <div className="list-tile__category">{ category }</div>
    </div>
);
export default ListTile;