import React from 'react';
import { Link } from 'react-router-dom';

const LeaderListItem = ({ name, rank }) => (
    <Link className="list-item" to={`/edit/${rank}`}>
        <h3 className="list-item__title">{name}</h3>
        <h3 className="list-item__data">({rank})</h3>
    </Link>
);

export default LeaderListItem;
