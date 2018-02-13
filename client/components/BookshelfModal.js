import { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

import BookItem from './BookItem';

class BookshelfItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    books: PropTypes.array,
    show: PropTypes.bool,
    onHide: PropTypes.func
  };

  static defaultProps = {
    id: null,
    title: '',
    books: [],
    show: false,
    onHide: () => {
    }
  };

  render() {
    return (
      <Modal show={this.props.show}
             onHide={() => this.props.onHide()}
             bsSize="lg"
             bsStyle="bookshelf-modal"
             onMouseDown={e => e.stopPropagation()}>
        <Modal.Header>
          <Modal.Title>{this.props.title} - Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.books.map(item => <BookItem key={item.id} {...item} />)
            }
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default" onClick={() => this.props.onHide()}>Cancel</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BookshelfItem;
