/* function for filtering the book array */
export const filterBooks = (filter, books) => {
  /*
        filter = {by: value, value: value}
    */
  switch (filter.by) {
    case "authors":
      return [...books].filter(book => book.author === filter.value)
    case "types":
      return [...books].filter(book => book.type === filter.value)
    default:
      return books
  }
}
