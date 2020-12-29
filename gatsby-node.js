const { slugify } = require("./src/actions/slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /* Grid Pages */
  createPage({
    path: `/writings/all`,
    component: require.resolve(`./src/templates/writingsGrid/writingsGrid.js`),
    context: { author: "*", form: "*" },
  })

  const authorsAndForms = await graphql(`
    query {
      authors: allContentfulWriting {
        distinct(field: author___name)
      }
      forms: allContentfulWriting {
        distinct(field: form___form)
      }
    }
  `)

  authorsAndForms.data.authors.distinct.forEach(author => {
    const slug = slugify(author)

    createPage({
      path: `/writings/${slug}`,
      component: require.resolve(
        `./src/templates/writingsGrid/writingsGrid.js`
      ),
      context: { author: author, form: "*" },
    })
  })

  authorsAndForms.data.forms.distinct.forEach(form => {
    const slug = slugify(form)

    createPage({
      path: `/writings/${slug}`,
      component: require.resolve(
        `./src/templates/writingsGrid/writingsGrid.js`
      ),
      context: { author: "*", form: form },
    })
  })

  /* Individual Writings Pages */
  const writings = await graphql(`
    query {
      allContentfulWriting {
        nodes {
          dateAdded
          datePublished
          title
          form {
            form
          }
          author {
            name
          }
          contentful_id
          summary {
            summary
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)

  writings.data.allContentfulWriting.nodes.forEach(writing => {
    const authorSlug = slugify(writing.author.name)

    const titleSlug = slugify(writing.title)

    createPage({
      path: `/writings/${authorSlug}/${titleSlug}`,
      component: require.resolve(
        `./src/templates/individualWriting/individualWriting.js`
      ),
      context: { id: writing.contentful_id },
    })
  })
}
