import { Component } from 'react';
import Header from './HeaderTemp';
import Footer from './FooterTemp';
import Home from '../home/HomeTemp';
import CharPage from '../characters/CharPageTemp';
import CharDetailPage from '../character/CharDetailPageTemp';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

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


