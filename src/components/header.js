import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">
      <img src={require('../images/master-logo-1.svg')} />
    </Link>
    <Link to="/about">About Me</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact" className="talk-btn">
      Let's talk
    </Link>
  </div>
)

export default Header
