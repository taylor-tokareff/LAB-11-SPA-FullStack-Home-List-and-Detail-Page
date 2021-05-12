import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import CharPage from '../characters/CharPage';
import CharDetailPage from '../character/CharDetailPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CharForm from '../common/CharForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/characters" exact={true}
                render={routerProps => (
                  <CharPage {...routerProps} />
                )}
              />


              <Route path="/characters/add" exact={true}
                render={routerProps => (
                  <CharForm {...routerProps} />
                )}
              />

              <Route path="/characters/:id"
                render={routerProps => (
                  <CharDetailPage {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
