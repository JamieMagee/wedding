import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bulma-components/lib/components/container'
import Hero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'

export default () => {
  const { title, subtitle } = query()
  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container center className="has-text-centered">
          <Heading textWeight="normal">{title}</Heading>
          <Heading subtitle renderAs="h2">
            {subtitle}
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  )
}

const query = () => {
  const heroQuery = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          hero {
            title
            subtitle
          }
        }
      }
    }
  `)
  return heroQuery.markdownRemark.frontmatter.hero
}
