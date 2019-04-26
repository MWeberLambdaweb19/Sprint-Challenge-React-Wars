import React from 'react';

export default function Charprops(props){
    return(
        <div>
        <li className="listItem">Birth Year: {props.charBirth.birth_year}</li>
        <li className="listItem">Height: {props.charHeight.height}</li>
        <li className="listItem">Mass: {props.charHeight.mass}</li>
        <li className="listItem">Gender: {props.charHeight.gender}</li>
        </div>
    )
}