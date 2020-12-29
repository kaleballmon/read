import marked from "marked"

/* converts markdown to html */
const markdownify = md => {
  const rawMarkup = marked(md)
  return { __html: rawMarkup }
}

export default markdownify
