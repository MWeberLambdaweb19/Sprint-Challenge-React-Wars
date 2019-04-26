import React from 'react';
import Char from './char'
import './StarWars.scss'

export default function CharacterList(props) {
    return(
    <h1>{props.listResults.map((item) => (
    <Char
        key={item.created}
        thisChar={item} 
        charBirth={item} 
        charHeight={item}
        charMass={item}
        charGender={item}
    />))}</h1>
    )}