import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './MissionItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
           <div className="user-item__info">
              <p>Mission Name : {props.name}</p>
              <p>Launch Year : {props.launchYear}</p>
              <p>Flight No: {props.id}</p>
              <p>Successfull Launch: {props.SucFul}</p>
              <p>Successfull Landing: {props.sucLand}</p>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
