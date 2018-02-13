import { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string
  };

  static defaultProps = {
    id: null,
    title: '',
    author: ''
  };

  render() {
    return (
        <tr className="bookshelf-item">
          <td>{this.props.title}</td>
          <td>
            <button className="btn btn-default">Edit</button>
            <button className="btn btn-default">Delete</button>
          </td>
        </tr>
    );
  }
}

export default BookshelfItem;
