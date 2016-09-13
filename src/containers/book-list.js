import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className='list-group-item' key={book.title}>{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group, col-md-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will be available as props to BookList
  return {
    books: state.books
  };

  // whenever app state changes, BookList container will rerender
}

export default connect(mapStateToProps)(BookList);
