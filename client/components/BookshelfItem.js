import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import BookshelfModal from './BookshelfModal';

class BookshelfItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onBookDelete: PropTypes.func,
    books: PropTypes.array
  };

  static defaultProps = {
    id: null,
    title: '',
    onDelete: () => {},
    onUpdate: () => {},
    onBookDelete: () => {},
    books: []
  };

  state = {
    editModalIsOpen: false,
    showModalIsOpen: false,
    title: ''
  };

  componentDidMount() {
    this.setState({ title: this.props.title });
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  handleUpdate() {
    this.setState({ editModalIsOpen: false });
    this.props.onUpdate(this.props.id, this.state.title);
  }

  handleBookDelete(id) {
    this.setState({ showModalIsOpen: false });
    this.props.onBookDelete(id);
  }

  render() {
    return (
        <tr className="bookshelf-item">
          <td>{this.props.title}</td>
          <td>
            <button className="btn btn-default" onClick={() => this.setState({ showModalIsOpen: true })}>Show</button>
            <button className="btn btn-default" onClick={() => this.setState({ editModalIsOpen: true })}>Edit</button>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Delete</button>
          </td>
          <Modal show={this.state.editModalIsOpen}
                 onHide={() => this.setState({ editModalIsOpen: false })}
                 bsSize="sm"
                 onMouseDown={e => e.stopPropagation()}>
            <Modal.Header>
              <Modal.Title>Update bookshelf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" className="form-control" placeholder="Title"
                     value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-default" onClick={() => this.setState({ editModalIsOpen: false })}>Cancel</button>
              <button className="btn btn-primary" onClick={() => this.handleUpdate()}>Update</button>
            </Modal.Footer>
          </Modal>
          <BookshelfModal show={this.state.showModalIsOpen}
                          onHide={() => this.setState({ showModalIsOpen: false })}
                          id={this.props.id} title={this.props.title} books={this.props.books}
                          onDelete={id => this.handleBookDelete(id)} />
        </tr>
    );
  }
}

export default BookshelfItem;
