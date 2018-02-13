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
        <div className="bookshelf-item">

        </div>
    );
  }
}

export default BookshelfItem;
