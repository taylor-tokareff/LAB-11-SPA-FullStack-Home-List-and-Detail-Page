import { Component } from 'react';
import { getMortalKombat } from '../utils/fetch-API.js';
import CharList from './CharList';

import './CharPage.css';

export default class CharPage extends Component {
  state = {
    characters: []
  }

  async componentDidMount() {
    const characters = await getMortalKombat();
    if (characters) {
      this.setState({ characters: characters });
    }
    else {
      console.log('No characters received! Check network tab');
    }
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="CharPage">
        <h2>List o' Characters</h2>

        <CharList characters={characters} />

      </div>
    );
  }

}

