import React, { Component } from 'react';
import CharItem from './CharItemTemp';
import './CharList.css';


class CharList extends Component {

  render() {
    const { characters } = this.props;

    return (
      <ul className="charList">
        {characters.map(character => (
          <CharItem key={character.id} character={character} />
        ))}
      </ul>
    );
  }

}

export default CharList;
