import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // takes actions and makes them flow through all containers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
          key={book.title}>
          {book.title}
        </li>
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

// Anything returned from this function will be available as props
function mapDispatchToProps(dispatch) {
  // when selectBook is called, its result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// whatever is returned will be available as props to BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };

  // whenever app state changes, BookList container will rerender
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
