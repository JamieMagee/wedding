import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

import Events from '../components/Events'
import Layout from '../components/Layout'
import Questions from '../components/Questions'
import GoogleMap from '../components/GoogleMap'
import SaveTheDate from '../components/SaveTheDate'
import Rsvp from '../components/Rsvp'

export const IndexPageTemplate = () => (
  <div>
    <Section id="intro">
      <Container>
        <SaveTheDate />
      </Container>
    </Section>
    <Section id="where">
      <Container>
        <Events />
      </Container>
    </Section>
    <Section id="map">
      <GoogleMap />
    </Section>
    <Section id="faq" className="questions">
      <Container>
        <Questions />
      </Container>
    </Section>
    {/* <Section id="rsvp" className="has-background-light">
      <Container>
        <Rsvp />
      </Container>
    </Section> */}
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
