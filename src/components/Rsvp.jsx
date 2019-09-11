import React, { useState } from 'react'

import Heading from 'react-bulma-components/lib/components/heading'
import Notification from 'react-bulma-components/lib/components/notification'
import Button from 'react-bulma-components/lib/components/button'
import { Field, Label, Control, Input, Radio } from 'react-bulma-components/lib/components/form'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const [input, setInput] = useState({ rsvp: true })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': 'rsvp',
        ...input
      })
    })
    setSubmitted(true)
  }

  if (!submitted) {
    return (
      <form name="rsvp" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <Heading size={1}>RSVP</Heading>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              name="name"
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
              name="email"
              type="email"
              value={input.email}
              onChange={event => {
                setInput({ ...input, email: event.target.value })
              }}
            />
          </Control>
        </Field>
        <Field kind="group" name="rsvp">
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
  } else {
    return (
      <Notification color="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{' '}
        <a href="/">felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
      </Notification>
    )
  }
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
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
