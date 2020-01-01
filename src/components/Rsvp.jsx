import React, { useState } from 'react'

import Heading from 'react-bulma-components/lib/components/heading'
import Notification from 'react-bulma-components/lib/components/notification'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import Modal from 'react-modal'
import Button from 'react-bulma-components/lib/components/button'
import { Field, Label, Control, Input, Radio } from 'react-bulma-components/lib/components/form'

import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { contentYes, contentNo } = query()
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

  const closeModal = () => {
    setInput({ rsvp: true })
    setSubmitted(false)
  }

  return (
    <div>
      <form name="rsvp" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <Heading size={1}>RSVP</Heading>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              name="name"
              type="text"
              required="required"
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
              required="required"
              value={input.email}
              onChange={event => {
                setInput({ ...input, email: event.target.value })
              }}
            />
          </Control>
        </Field>
        <Field kind="group">
          <input
            className="is-checkradio"
            name="rsvp"
            id="rsvpYes"
            type="radio"
            checked={input.rsvp}
            onChange={() => {
              setInput({ ...input, rsvp: true })
            }}
          />
          <Label htmlFor="rsvpYes">Yes, I will be there</Label>
          <input
            className="is-checkradio"
            name="rsvp"
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
      <Modal
        isOpen={submitted}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: 0
          }
        }}
      >
        <Notification>
          <div
            dangerouslySetInnerHTML={{
              __html: remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(input.rsvp ? contentYes : contentNo)
                .toString()
            }}
          />
          <Button remove onClick={closeModal} />
        </Notification>
      </Modal>
    </div>
  )
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
          rsvp {
            contentYes
            contentNo
          }
        }
      }
    }
  `)
  return query.markdownRemark.frontmatter.rsvp
}
