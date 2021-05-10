import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './charItem.css';

class CatItem extends Component {

  render() {
    const character = this.props.character;

    return (
      <li className="charItem">
        <Link to={`/characters/${character.id}`}>
          <h2>{character.name}</h2>
          <img src={character.url} alt={character.name} />
          <p>Lives: {character.fightingStyle}</p>
        </Link>
      </li>
    );
  }

}

export default CatItem;