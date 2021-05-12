import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>Mortal Kombat App</h1>
        <Link to="/">Home Page</Link>
        <Link to="/characters">Character List</Link>
        <Link to="/characters/add">Add Character</Link>



      </header>
    );
  }

}

export default Header;