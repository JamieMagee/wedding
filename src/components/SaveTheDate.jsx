import React from 'react'
import Heading from 'react-bulma-components/lib/components/heading'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { title, content } = query()
  return (
    <div>
      <Heading size={1}>{title}</Heading>
      <p>{content}</p>
    </div>
  )
}

const query = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          savethedate {
            title
            content
          }
        }
      }
    }
  `)
  return query.markdownRemark.frontmatter.savethedate
}
