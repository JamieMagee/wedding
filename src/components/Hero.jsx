import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bulma-components/lib/components/container'
import Hero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'

import Navbar from '../components/Navbar'
import CurvedDecoration from './CurvedDecoration'

export default () => {
  const { title, subtitle } = query()
  return (
    <Hero size="fullheight">
      <Navbar />
      <Hero.Body>
        <div className="has-background-black is-overlay"></div>
        <Container center className="has-text-centered">
          <Heading size={1}>{title}</Heading>
          <Heading subtitle size={3}>
            {subtitle}
          </Heading>
        </Container>
      </Hero.Body>
      <CurvedDecoration color="white" />
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
