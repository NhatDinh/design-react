import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const IndexPage = () => (
  <div className="body">
    <Header />
    <div className="bg-container">
      <div className="hero-container">
        <h1>Hi, I'm Nhat Dinh and I'm a Dev/Designer</h1>
        <p>
          I'm passionate about Product Design and Development, SEO and
          Entrepreneurship
        </p>
        <div className="work-btn">
          <Link to="/work/">See my work</Link>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
