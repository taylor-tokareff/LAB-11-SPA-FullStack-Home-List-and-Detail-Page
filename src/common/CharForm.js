import { Component } from 'react';
import './CharForm.css';

export default class CharForm extends Component {
  state = {
    name: '',
    species: '',
    url: '',
    introduced: '',
    isNinja: '',
    fightingStyle: ''
  }

  componentDidMount() {
    const { Char } = this.props;
    if (!Char) { return; }

    this.setState(Char);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeSpecies = ({ target }) => {
    this.setState({ species: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeIntroduced = ({ target }) => {
    this.setState({ introduced: target.value });
  }

  handleChangeIsNinja = ({ target }) => {
    this.setState({ isNinja: target.checked });
  }

  handleChangeFightingStyle = ({ target }) => {
    this.setState({ fightingStyle: target.value });
  }

  render() {
    const { name, species, url, introduced, isNinja, fightingStyle } = this.state;
    const { Char } = this.props;

    console.log(this.state);
    return (
      <form className="CharForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Character Name</span>
            <input name="name" required placeholder="Name of the fighter..."
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Character Species</span>
            <select name="species" required placeholder="Species"
              value={species} onChange={this.handleChangeSpecies}
            >
              <option value="" disabled>Species</option>
              <option>Cyborg</option>
              <option>Edenian</option>
              <option>Spectre</option>
              <option>God</option>
              <option>Human</option>
              <option>Shokan</option>
              <option>Saurian</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Character Image Url</span>
            <input name="url" required placeholder="Url to image of Character"
              value={url} onChange={this.handleChangeUrl}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Game Introduced</span>
            <select name="introduced" required
              value={introduced} onChange={this.handleChangeIntroduced}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Is a Ninja?</span>
            <span className="vertically-centered">
              <input name="isNinja"
                type="checkbox"
                value={isNinja} onChange={this.handleChangeIsNinja}
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <label>
            <span>Fighting Style</span>
            <select name="fightingStyle" required placeholder="Fighting Style"
              value={fightingStyle} onChange={this.handleChangeFightingStyle}
            >
              <option value="" disabled>Fighting Style</option>
              <option>Ninjutsu</option>
              <option>Mi Tzu</option>
              <option>Eagle Claw</option>
              <option>Hapkido</option>
              <option>Nan Quan</option>
              <option>Pao Chui</option>
              <option>Xing Yi</option>
              <option>Jeet Kun Do</option>
              <option>Ying Yeung</option>
              <option>Goju Ryu</option>
              <option>Kuatan</option>
              <option>Hung Gar</option>
              <option>Snake</option>
              <option>Shokan</option>
              <option>Shotokan</option>
              <option>Kenpo</option>
            </select>
          </label>
        </p>

        <p>
          <button>{Char ? 'Update' : 'Add'} Character</button>
        </p>

      </form>

    );
  }
}