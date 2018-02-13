import { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string,
    onDelete: PropTypes.func
  };

  static defaultProps = {
    id: null,
    title: '',
    author: '',
    isbn: '',
    onDelete: () => {}
  };

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.isbn}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default BookshelfItem;
