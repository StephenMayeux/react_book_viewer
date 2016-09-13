import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

// takes actions and wires them up to all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is return from app state will show up as props in BookList
  return {
    books: state.books // makes it available to this.props
  };
}

// Anything returned from this function will be props on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promot BookList from Component to Contaier. Needs to know about selectBook and make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
