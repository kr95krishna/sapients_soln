import React from 'react';

import MissionItem from './MissionItem';
import './MissionList.css'
const UsersList = props => {
   return (
    <ul className="users-list">
            {props.items.map(user => {
                return <MissionItem
                key = {user.flight_number}
                id = {user.flight_number}
                image = {user.links.mission_patch_small}
                name={user.mission_name}
                launchYear={user.launch_year}
                SucFul = {user.launch_success}
                sucLand={'True'}
                
                />;
            })}
        </ul> 
   )
}


export default UsersList;