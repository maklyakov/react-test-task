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
    })
        .then(res => res.json())
        .then(res => this.setState({ bookshelves: res }));
  }

  render() {
    return (
        <div className="bookshelves-page">
          <h2>Bookshelves</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.bookshelves.map(bookshelf => <BookshelfItem key={bookshelf.id} {...bookshelf} />)
            }
            </tbody>
          </table>
        </div>
    );
  }
}

export default BookshelvesPage;
