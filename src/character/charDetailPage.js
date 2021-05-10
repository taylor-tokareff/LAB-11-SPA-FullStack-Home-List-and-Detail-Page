import { Component } from 'react';
import { getCharacter } from '../utils/mk-api.js';
import './charDetailPage.css';

export default class charDetailPage extends Component {
  state = {
    character: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const character = await getCharacter(match.params.id);
    if (character) {
      this.setState({ character: character });
    }
    else {
      console.log('No character received. Check id and network tab');
    }
  }

  render() {
    const { character } = this.state;

    if (!character) return null;

    return (
      <div className="charDetail">
        <h2>Character Detail Page</h2>

        <p>Character name: {character.name}</p>
        <p>Character species: {character.species}</p>
        <p>Character fighting style: {character.fightingStyle}</p>
        <p>Game introduced: {character.introduced}</p>
        <p>Is ninja?: {character.isNinja}</p>
      </div>
    );
  }

}