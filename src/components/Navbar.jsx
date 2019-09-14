import React, { useState } from 'react'
import Navbar from 'react-bulma-components/lib/components/navbar'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="hero-head">
      <Navbar active={open}>
        <Navbar.Brand>
          <Navbar.Burger onClick={() => setOpen(!open)} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Event</Navbar.Item>
            <Navbar.Item>Questions</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  )
}
