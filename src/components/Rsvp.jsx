import React, { useState } from 'react'
import Button from 'react-bulma-components/lib/components/button'

import Heading from 'react-bulma-components/lib/components/heading'
import { Field, Label, Control, Input, Radio } from 'react-bulma-components/lib/components/form'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const [input, setInput] = useState({ rsvp: true })

  const handleSubmit = event => {
    event.preventDefault()
    const data = Object.keys(input).reduce((formData, key) => {
      formData.append(key, input[key])
      return formData
    }, new FormData())
    data.append('form-name', 'rsvp')
    fetch('/', {
      method: 'POST',
      body: data
    })
  }

  return (
    <form name="rsvp" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <Heading size={1}>RSVP</Heading>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            value={input.name}
            onChange={event => {
              setInput({ ...input, name: event.target.value })
            }}
          />
        </Control>
      </Field>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input
            type="email"
            value={input.email}
            onChange={event => {
              setInput({ ...input, email: event.target.value })
            }}
          />
        </Control>
      </Field>
      <Field kind="group">
        <input
          class="is-checkradio"
          id="rsvpYes"
          type="radio"
          checked={input.rsvp}
          onChange={() => {
            setInput({ ...input, rsvp: true })
          }}
        />
        <Label htmlFor="rsvpYes">Yes, I will be there</Label>
        <input
          class="is-checkradio"
          id="rsvpNo"
          type="radio"
          checked={!input.rsvp}
          onChange={() => {
            setInput({ ...input, rsvp: false })
          }}
        />
        <Label htmlFor="rsvpNo">Sorry, I can't come</Label>
      </Field>
      <Field>
        <Control>
          <Button fullwidth={true} submit={true} color="primary">
            Submit
          </Button>
        </Control>
      </Field>
    </form>
  )
}

const query = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          registry {
            title
            content
          }
        }
      }
    }
  `)
  return query.markdownRemark.frontmatter.registry
}
