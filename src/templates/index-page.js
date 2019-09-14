import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

import Events from '../components/Events'
import Layout from '../components/Layout'
import Questions from '../components/Questions'
import GoogleMap from '../components/GoogleMap'
import SaveTheDate from '../components/SaveTheDate'
import Rsvp from '../components/Rsvp'

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div>
    <Section>
      <Container>
        <SaveTheDate />
      </Container>
    </Section>
    <Section className="has-background-light">
      <Container>
        <Rsvp />
      </Container>
    </Section>
    <Section>
      <Container>
        <Events />
      </Container>
    </Section>
    <GoogleMap />
    <Section>
      <Container>
        <Questions />
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
