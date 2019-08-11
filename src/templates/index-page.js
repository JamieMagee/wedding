import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import GoogleMap from '../components/GoogleMap'
import SaveTheDate from '../components/SaveTheDate'

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <SaveTheDate />
      </div>
    </section>
    <GoogleMap />
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage
