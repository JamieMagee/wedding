import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import Content from 'react-bulma-components/lib/components/content'
import Card from 'react-bulma-components/lib/components/card'
import Heading from 'react-bulma-components/lib/components/heading'
import Section from 'react-bulma-components/lib/components/section'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const events = query()
  return (
    <Columns>
      {events.map(event => (
        <Columns.Column>
          <Card>
            <Card.Content>
              <Heading size={4}>{event.title}</Heading>
              <Content>{event.content}</Content>
            </Card.Content>
          </Card>
        </Columns.Column>
      ))}
    </Columns>
  )
}

const query = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          events {
            title
            subtitle
            content
          }
        }
      }
    }
  `)
  return query.markdownRemark.frontmatter.events
}
