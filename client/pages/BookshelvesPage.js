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
    bookshelfModalIsOpen: false,
    bookModalIsOpen: false,
    bookshelfTitle: '',
    title: '',
    author: '',
    isbn: '',
    bookshelf: ''
  };

  componentDidMount() {
    this.fetchBookshelves();
  }

  fetchBookshelves() {
    this.setState({ bookshelfModalIsOpen: false, bookModalIsOpen: false, loading: true, bookshelfTitle: '' });
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

  onBookshelfCreate() {
    return fetch(URL.bookshelf, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({ bookshelf: { title: this.state.bookshelfTitle } }),
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

  onBookCreate() {
    const BOOK = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      bookshelf_id: parseInt(this.state.bookshelf) || this.state.bookshelves[0].id
    };

    return fetch(URL.book, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(BOOK),
      headers: BookshelvesPage.HEADERS
    })
      .then(res => this.fetchBookshelves());
  }

  onBookDelete(id) {
    return fetch(URL.bookById(id), {
      method: 'DELETE',
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
                                                                     onBookDelete={id => this.onBookDelete(id)}
                                                                     onBookUpdate={book => this.onBookUpdate(book)}
                                                                     {...bookshelf} />)
            }
            </tbody>
          </table>
          <div className="actions">
            <button className="btn btn-primary"
                    onClick={() => this.setState({ bookshelfModalIsOpen: true })}>
              Add Bookshelf
            </button>
            <button className="btn btn-primary"
                    onClick={() => this.setState({ bookModalIsOpen: true })}>
              Add Book
            </button>
          </div>

          <Modal show={this.state.bookshelfModalIsOpen}
                 onHide={() => this.setState({ bookshelfModalIsOpen: false })}
                 bsSize="sm"
                 onMouseDown={e => e.stopPropagation()}>
            <Modal.Header>
              <Modal.Title>Create new bookshelf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" className="form-control" placeholder="Title"
                     value={this.state.bookshelfTitle} onChange={e => this.setState({ bookshelfTitle: e.target.value })} />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-default" onClick={() => this.setState({ bookshelfModalIsOpen: false })}>Cancel</button>
              <button className="btn btn-primary" onClick={() => this.onBookshelfCreate()}>Submit</button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.bookModalIsOpen}
                 onHide={() => this.setState({ bookModalIsOpen: false })}
                 bsSize="sm"
                 onMouseDown={e => e.stopPropagation()}>
            <Modal.Header>
              <Modal.Title>Create new bookshelf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" className="form-control" placeholder="Title"
                     value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
              <label htmlFor="title">Author</label>
              <input id="author" type="text" className="form-control" placeholder="Author"
                     value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />
              <label htmlFor="title">ISBN</label>
              <input id="isbn" type="text" className="form-control" placeholder="ISBN"
                     value={this.state.isbn} onChange={e => this.setState({ isbn: e.target.value })} />
              <label htmlFor="select">Bookshelf</label>
              <select name="select" id="select" onChange={e => this.setState({ bookshelf: e.target.value })}>
                {this.state.bookshelves.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
              </select>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-default" onClick={() => this.setState({ bookModalIsOpen: false })}>Cancel</button>
              <button className="btn btn-primary" onClick={() => this.onBookCreate()}>Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default BookshelvesPage;
