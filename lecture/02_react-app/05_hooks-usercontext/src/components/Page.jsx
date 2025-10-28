import React, { createContext, useContext } from 'react'
import Header from './header'
import Content from './Content'
import Footer from './Footer'

function Page() {
  
  return (
    <div className='page'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Page