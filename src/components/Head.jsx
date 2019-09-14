import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { title, description } = query()
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
    </Helmet>
  )
}

export const query = () => {
  const site = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            siteMetadata {
              title
              description
            }
          }
        }
      }
    `
  )
  return site.markdownRemark.frontmatter.siteMetadata
}
