import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharItem.css';

class CharItem extends Component {

  render() {
    const character = this.props.character;

    return (
      <li className="CharItem">
        <Link to={`/characters/${character.id}`}>
          <h2>{character.name}</h2>
          <img src={character.url} alt={character.name} />
          <p>Fighting Style: {character.fightingStyle}</p>
        </Link>
      </li>
    );
  }

}

export default CharItem;