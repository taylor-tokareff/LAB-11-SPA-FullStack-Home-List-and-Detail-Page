import { Component } from 'react';
import CharForm from '../common/CharForm';
// import Loader from '../common/Loader';
import { getCharacter, updateChar } from '../utils/fetch-API';
import './CharEditPage.css';

export default class CharEditPage extends Component {
  state = {
    characters: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const char = await getCharacter(match.params.id);
      this.setState({ char: char });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async char => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedChar = await updateChar(char);
      history.push(`/characters/${updatedChar.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { char } = this.state;

    return (
      <div className="CharEditPage">
        <h2>Edit Character</h2>

        {char && <CharForm char={char} onSubmit={this.handleUpdate} />}
      </div>
    );
  }

}
