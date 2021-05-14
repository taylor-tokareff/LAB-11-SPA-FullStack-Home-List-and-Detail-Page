import { Component } from 'react';
import CharForm from '../common/CharForm';

import { addChar } from '../utils/fetch-API';
import './CharAddPage.css';

export default class CharAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async charToAdd => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newChar = await addChar(charToAdd);
      console.log(newChar);
      history.push(`/characters/${newChar.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (
      <div className="CharAddPage">
        <h2>Add a fighter</h2>
        <CharForm onSubmit={this.handleAdd} />
      </div>
    );
  }

}