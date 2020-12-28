import React, { useEffect, useState } from "react"
import GridItem from "./gridItem/gridItem.js"
import gridStyles from "./grid.module.css"
import { useTransition, animated } from "react-spring"

export default function Grid({ writings }) {
  /* intermediate state has to be used to trigger the delayed transition */
  const [state, setState] = useState(writings)

  /* Setting timeout for writting new state for transition to take place */
  useEffect(() => {
    setTimeout(() => setState(writings), 824)
  }, [writings])

  /* transition used for the the grid */
  const transitions = useTransition(state, writing => writing.contentful_id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 824 },
    update: item => async (next, cancel) => {
      await next({ opacity: 0 })
      await next({ opacity: 1 })
    },
  })

  return (
    <div className={gridStyles.readingsGrid}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <GridItem
            title={item.title}
            author={item.author.name}
            id={item.contenful_id}
            key={item.contenful_id}
            src={item.image.file.url}
            alt={item.image.description}
          />
        </animated.div>
      ))}
    </div>
  )
}
