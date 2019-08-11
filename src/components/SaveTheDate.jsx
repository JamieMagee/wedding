import React from 'react'
import { Section, Columns, Heading } from 'react-bulma-components/full'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { title, content } = query()
  return (
    <Section>
      <Columns size="half">
        <Heading size={1}>{title}</Heading>
        <p>{content}</p>
      </Columns>
    </Section>
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
