import React, { Component } from 'react';
import charItem from './charItem';
import './charList.css';


class charList extends Component {

  render() {
    const { characters } = this.props;

    return (
      <ul className="charList">
        {characters.map(character => (
          <charItem key={character.id} character={character} />
        ))}
      </ul>
    );
  }

}

export default charList;