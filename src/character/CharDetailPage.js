import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getCharacter, deleteChar } from '../utils/fetch-API.js';
import './CharDetailPage.css';

export default class CharDetailPage extends Component {
  state = {
    character: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const character = await getCharacter(match.params.id);
      this.setState({ character: character });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }


  handleDelete = async () => {
    const { char } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${char.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteChar(char.id);
      history.push('/characters');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { character, loading } = this.state;

    if (!character) return null;

    return (
      <div className="CharDetail">
        <h2>Character Detail Page</h2>

        <p>Character name: {character.name}</p>
        <p>Character species: {character.species}</p>
        <p>Character fighting style: {character.fightingStyle}</p>
        <p>Game introduced: {character.introduced}</p>
        <p>Is ninja?: {String(character.isNinja)}</p>

        <Link to={`/characters/${character.id}/edit`}>
          Edit this Character
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Character
        </button>

      </div>
    );
  }

}
