import React from 'react'
import PropTypes from 'prop-types'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

import Events from '../components/Events'
import Layout from '../components/Layout'
import Registry from '../components/Registry'
import GoogleMap from '../components/GoogleMap'
import SaveTheDate from '../components/SaveTheDate'
import CurvedDecoration from '../components/CurvedDecoration'
import Rsvp from '../components/Rsvp'

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <Section className="savethedate">
      <Container>
        <SaveTheDate />
      </Container>
    </Section>
    <CurvedDecoration color="#fff9f5" flip />
    <Section className="events">
      <Container>
        <Events />
      </Container>
    </Section>
    <CurvedDecoration color="white" backgroundColor="#fff9f5" />
    <Section className="registry">
      <Container>
        <Registry />
      </Container>
    </Section>
    <GoogleMap />
    <Section>
      <Container>
        <Rsvp />
      </Container>
    </Section>
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
