/* function for sorting the book array */

export const sortBooks = (option, books) => {
  switch (parseInt(option)) {
    case 1:
      return [...books].sort((book1, book2) =>
        book1.author.localeCompare(book2.author)
      )
    case 2:
      return [...books].sort(
        (book1, book2) => -1 * book1.author.localeCompare(book2.author)
      )
    case 3:
      return [...books].sort((book1, book2) =>
        book1.title.localeCompare(book2.title)
      )
    case 4:
      return [...books].sort(
        (book1, book2) => -1 * book1.title.localeCompare(book2.title)
      )
    default:
      return books
  }
}
