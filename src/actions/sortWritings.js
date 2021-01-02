/* function for sorting the writings array */

export const sortWritings = (option, writings) => {
  switch (parseInt(option)) {
    /* Author A -> Z */
    case 1:
      return [...writings].sort((writing1, writing2) =>
        writing1.author.name.localeCompare(writing2.author.name)
      )
    /* Author Z -> A */
    case 2:
      return [...writings].sort(
        (writing1, writing2) =>
          -1 * writing1.author.name.localeCompare(writing2.author.name)
      )
    /* Title A -> Z */
    case 3:
      return [...writings].sort((writing1, writing2) =>
        writing1.title.localeCompare(writing2.title)
      )
    /* Title Z -> A */
    case 4:
      return [...writings].sort(
        (writing1, writing2) =>
          -1 * writing1.title.localeCompare(writing2.title)
      )
    /* case 5 in 6 first sorts by name and then sorts by year */
    /* Publishing Date: Oldest → Newest */
    case 5:
      return [...writings]
        .sort((writing1, writing2) =>
          writing1.author.name.localeCompare(writing2.author.name)
        )
        .sort(
          (writing1, writing2) =>
            writing1.yearPublished - writing2.yearPublished
        )
    /* Publishing Date: Newest → Oldest */
    case 6:
      return [...writings]
        .sort((writing1, writing2) =>
          writing1.author.name.localeCompare(writing2.author.name)
        )
        .sort(
          (writing1, writing2) =>
            writing2.yearPublished - writing1.yearPublished
        )
    default:
      return writings
  }
}
