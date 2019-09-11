import React from 'react'
import PropTypes from 'prop-types'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

import Events from '../components/Events'
import Layout from '../components/Layout'
import Registry from '../components/Registry'
import GoogleMap from '../components/GoogleMap'
import SaveTheDate from '../components/SaveTheDate'
import Rsvp from '../components/Rsvp'

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <Section className="savethedate">
      <Container>
        <SaveTheDate />
      </Container>
    </Section>
    <Section className="events">
      <Container>
        <Events />
      </Container>
    </Section>
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
