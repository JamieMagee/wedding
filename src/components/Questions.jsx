import React from 'react'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import Heading from 'react-bulma-components/lib/components/heading'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { title, content } = query()
  return (
    <div>
      <Heading size={1}>{title}</Heading>
      <p
        dangerouslySetInnerHTML={{
          __html: remark()
            .use(recommended)
            .use(remarkHtml)
            .processSync(content)
            .toString()
        }}
      ></p>
    </div>
  )
}

const query = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          questions {
            title
            content
          }
        }
      }
    }
  `)
  return query.markdownRemark.frontmatter.questions
}
