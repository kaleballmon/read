exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: `/writings/all`,
    component: require.resolve(`./src/templates/writings.js`),
    context: { author: "*", type: "*" },
  })

  const authorsAndTypes = await graphql(`
    query {
      authors: allContentfulWriting {
        distinct(field: author___name)
      }
      types: allContentfulWriting {
        distinct(field: type)
      }
    }
  `)

  authorsAndTypes.data.authors.distinct.forEach(author => {
    const slug = author
      .replace(/\s+/g, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    createPage({
      path: `/writings/${slug}`,
      component: require.resolve(`./src/templates/writings.js`),
      context: { author: author, type: "*" },
    })
  })

  authorsAndTypes.data.types.distinct.forEach(type => {
    const slug = type
      .replace(/\s+/g, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    createPage({
      path: `/writings/${slug}`,
      component: require.resolve(`./src/templates/writings.js`),
      context: { author: "*", type: type },
    })
  })
}
