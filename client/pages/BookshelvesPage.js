import { Component } from 'react';

import BookshelfItem from '../components/BookshelfItem';

class BookshelvesPage extends Component {
  state = {
    bookshelves: []
  };

  componentDidMount() {
    return fetch('https://react-test-globacap.herokuapp.com/bookshelves.json', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '123123123123'
      }
    });
  }

  render() {
    return (
        <div className="bookshelves-page">
          <h2>Bookshelves</h2>

        </div>
    );
  }
}

export default BookshelvesPage;
