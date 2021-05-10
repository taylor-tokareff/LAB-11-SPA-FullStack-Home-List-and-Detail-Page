import { Component } from 'react';
import charList from './charList';
import { getMortalKombat } from '../utils/mk-api.js';
import './charPage.css';

export default class charPage extends Component {
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
      <div className="charPage">
        <h2>List o' Characters</h2>

        <charList characters={characters} />

      </div>
    );
  }

}