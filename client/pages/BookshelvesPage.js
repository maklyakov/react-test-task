import { Component } from 'react';
import { Modal } from 'react-bootstrap';

import BookshelfItem from '../components/BookshelfItem';

import { URL } from '../config/url';

class BookshelvesPage extends Component {
  static HEADERS = {
      'Content-Type': 'application/json',
      'X-Auth-Token': '123123123123'
  };

  state = {
    bookshelves: [],
    books: [],
    loading: false,
    isOpen: false,
    title: ''
  };

  componentDidMount() {
    this.fetchBookshelves();
  }

  fetchBookshelves() {
    this.setState({ isOpen: false, loading: true, title: '' });
    return fetch(URL.bookshelf, {
      method: 'GET',
      credentials: 'same-origin',
      headers: BookshelvesPage.HEADERS
    })
        .then(res => res.json())
        .then(res => {
          this.setState({ bookshelves: res });
          this.fetchBooks();
        });
  }

  fetchBooks() {
    return fetch(URL.book, {
      method: 'GET',
      credentials: 'same-origin',
      headers: BookshelvesPage.HEADERS
    })
        .then(res => res.json())
        .then(res => {
          this.setState({ books: res, loading: false });
          this.parseData();
        });
  }

  parseData() {
    const BOOKSHELVES = this.state.bookshelves;

    BOOKSHELVES.forEach(item => {
      const BOOKS = [];

      this.state.books.forEach(book => {
        if (book.bookshelf_id === item.id) {
          BOOKS.push(book);
        }
      });
      item.books = BOOKS;
    });

    this.setState({ bookshelves: BOOKSHELVES });
  }

  onSubmit() {
    return fetch(URL.bookshelf, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({ bookshelf: { title: this.state.title } }),
      headers: BookshelvesPage.HEADERS
    })
        .then(res => this.fetchBookshelves());
  }

  onDelete(id) {
    return fetch(URL.bookshelfById(id), {
          method: 'DELETE',
          credentials: 'same-origin',
          headers: BookshelvesPage.HEADERS
      })
          .then(res => this.fetchBookshelves());
  }

  onUpdate(id, title) {
    return fetch(URL.bookshelfById(id), {
          method: 'PUT',
          body: JSON.stringify({ bookshelf: { title: title } }),
          credentials: 'same-origin',
          headers: BookshelvesPage.HEADERS
      })
          .then(res => this.fetchBookshelves());
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
              this.state.bookshelves.map(bookshelf => <BookshelfItem key={bookshelf.id}
                                                                     onDelete={id => this.onDelete(id)}
                                                                     onUpdate={(id, title) => this.onUpdate(id, title)}
                                                                     {...bookshelf} />)
            }
            </tbody>
          </table>
          <button className="btn btn-primary"
                  onClick={() => this.setState({ isOpen: true })}>
            Add Bookshelf
          </button>
          <Modal show={this.state.isOpen}
                 onHide={() => this.setState({ isOpen: false })}
                 bsSize="sm"
                 onMouseDown={e => e.stopPropagation()}>
            <Modal.Header>
              <Modal.Title>Create new bookshelf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" className="form-control" placeholder="Title"
                     value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-default" onClick={() => this.setState({ isOpen:false })}>Cancel</button>
              <button className="btn btn-primary" onClick={() => this.onSubmit()}>Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default BookshelvesPage;
