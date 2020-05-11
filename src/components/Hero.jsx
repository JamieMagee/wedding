import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bulma-components/lib/components/container'
import Hero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'
import Navbar from 'react-bulma-components/lib/components/navbar'

export default () => {
  const { title, subtitle } = query()
  const [active, setActive] = useState(false)
  return (
    <Hero size="fullheight">
      <Navbar active={active}>
        <Navbar.Brand>
          <Navbar.Burger onClick={() => setActive(!active)} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item href="#intro">Intro</Navbar.Item>
            <Navbar.Item href="#where">Where & when</Navbar.Item>
            <Navbar.Item href="#map">Map</Navbar.Item>
            <Navbar.Item href="#faq">FAQ</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <Hero.Body>
        <Container center="true" className="has-text-centered">
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
