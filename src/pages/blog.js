import React from 'react'
import Link from 'gatsby-link'
import ProjectCard from '../components/project-card'
import '../styles/blog.css'

const Blog = () => (
  <div className="m-container">
    <h1>Hey, I'm working on sth 😅 Would love to hear your opinions! </h1>
    <div className="work-btn">
      <a href="https://twitter.com/nhat_ldinh">Twit Me</a>
    </div>
    <div className="blog-hero-container">
      <ProjectCard
        name="topIN.com - Top Influencers"
        logo={require('../images/topIN.svg')}
        des="Find 👀 the best influencer for your marketing effort. This website 
      aims to make it easier for marketing teams to find influencer they’ll click 🤝 ️ with."
        tech="Click to see early design in Figma"
        link="https://www.figma.com/proto/cNA81YV0MpJWdGQaVSXtzmY5/TopIN-Top-Influencers-design?node-id=1%3A4&scaling=min-zoom"
      />
    </div>
  </div>
)

export default Blog
