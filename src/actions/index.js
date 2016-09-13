export function selectBook(book) {
  // this is an action creator
  // and it needs to return an action, which is just an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
