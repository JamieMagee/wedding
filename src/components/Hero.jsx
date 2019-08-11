import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Navbar from '../components/Navbar'
import CurvedDecoration from './CurvedDecoration'

export default () => {
  const { title, subtitle } = query()
  return (
    <section class="hero is-fullheight header-image">
      <Navbar />

      <div class="has-background-black is-overlay"></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">{title}</h1>
          <h2 class="subtitle is-3">{subtitle}</h2>
        </div>
      </div>
      <CurvedDecoration />
    </section>
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
