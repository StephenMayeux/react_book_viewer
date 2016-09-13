export function selectBook(book) {
  // selectBook is an Action creator, needs to return an action (obj with type property)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
