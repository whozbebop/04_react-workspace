import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Footer() {

  const {isDark, setIsDark} = useContext(ThemeContext)

  return (
    <footer className={`footer ${isDark ? 'dark-mode' : ''}`}>
      <button
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <br />
      Copyright 2025. All rights reserved
    </footer>
  )
}

export default Footer