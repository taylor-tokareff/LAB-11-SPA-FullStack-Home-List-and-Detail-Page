import { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>Mortal Kombat App</h1>
        <a href="https://609aee063afb0000089ec4f1--silly-chandrasekhar-6f8e13.netlify.app/">Home Page</a>
        <a href="https://609aee063afb0000089ec4f1--silly-chandrasekhar-6f8e13.netlify.app/characters">Character List</a>

      </header>
    );
  }

}

export default Header;