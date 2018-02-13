import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BookshelvesPage from './pages/BookshelvesPage';

class App extends Component {
  render() {
    return <div className="app">
      <Switch>
        <Route path="/" component={BookshelvesPage} />
      </Switch>
    </div>;
  }
}

export default App;
