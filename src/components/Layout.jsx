import React from 'react'

import './all.sass'
import Footer from './Footer'
import Head from './Head'
import Hero from './Hero'

export default ({ children }) => {
  return (
    <div>
      <Head />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
