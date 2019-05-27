import React from 'react'
import Link from 'gatsby-link'

import '../styles/header.css'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const topOffset = window.pageYOffset
    if (topOffset > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={
          this.state.hasScrolled
            ? 'header-container header-containerScrolled'
            : 'header-container'
        }
      >
        <Link to="/">
          <img src={require('../images/logo.svg')} />
        </Link>
        <Link to="#about">About</Link>
        <Link to="/blog">Blog</Link>
        <div
          className={
            this.state.hasScrolled ? 'talk-btn talk-btnScrolled' : 'talk-btn'
          }
        >
          <Link to="#">
            <a href="https://twitter.com/nhat_ldinh">Twit Me</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
