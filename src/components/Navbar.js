import React, { useState } from 'react'
import { Navbar, Container } from 'react-bulma-components/full'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <div class="hero-head">
      <Navbar active={open}>
        <Navbar.Brand>
          <Navbar.Burger onClick={() => setOpen(!open)} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Event</Navbar.Item>
            <Navbar.Item>Registry</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  )
}
