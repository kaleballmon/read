/* function for creating the page slugs */

const slugify = preslug =>
  preslug
    .replace(/\s+/g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

module.exports = { slugify }
