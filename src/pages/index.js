import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import ProjectCard from '../components/project-card'
import '../styles/index.css'

const IndexPage = () => (
  <div>
    <Header />
    <div className="hero-container" id="about">
      <h1>Hi 👋🏼, I'm Nhat & I'm a Front-End Developer</h1>
      <p>
        I'm passionate about designing and building intuitive and beautiful
        software applications.
        <br />When I'm not working on my craft, I'm probably hanging out with my
        family.
      </p>
      <div className="work-btn">
        <a href="#work">MY WORK</a>
      </div>
    </div>

    <div className="waves-container">
      <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="4s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
          />
        </path>
      </svg>
    </div>
    <h2>Projects</h2>
    <div className="projects-container" id="work">
      <div className="projects-group">
        <ProjectCard
          name="Pricing Page for Scale AI"
          logo={require('../images/careers.svg')}
          des="Scale AI marketing site is super nice. Inspired by their neat design, I designed and built a Pricing Page based on their offered products."
          tech="Designed in Figma, built in HTML5, CSS3, SCC, NextJS, deployed on Zeit."
          link="https://nextjs.nhatldinh.now.sh/Pricing"
        />
        <ProjectCard
          name="NoviceChef - Recipe App"
          logo={require('../images/recipe-app.svg')}
          tech="React.JS, Node.JS, HTML5, CSS3"
          des="First attempt at Entrepreneurship, designed and built a single page React application for foodies to search for recipes, 
          turn it into a checklist and never again forget any ingredient when shopping for grocery."
          tech="Built in HTML5, CSS3, ReactJS, deployed on Heroku "
          link="https://novice-chef.herokuapp.com/"
        />
        <ProjectCard
          name="Checker Framework - GSoC 2018"
          logo={require('../images/static-analysis.svg')}
          des="During Google Summer of Code 2018, I worked remotely and contributed code to the Checker Framework, 
          an open source static analysis tool to detect bugs in Java code at compile time."
          tech="Java - Guava library "
          link="https://summerofcode.withgoogle.com/archive/2018/projects/5130657403502592/"
        />

        <ProjectCard
          name="FailoryC - Entrepreneurs Forum"
          logo={require('../images/entrepreneur.svg')}
          des="Failory.com, stories of startups with an emphasize on failed ones, is my all time favorite product on Product Hunt. 
          In an effort to monetize the site, I designed and built a private paid forum for Failory Community called FailoryC "
          tech="Designed in Figma, built using Webflow CMS."
          link="https://www.failory.com/community"
        />
        <ProjectCard
          name="HR Dashboard"
          logo={require('../images/hr-dashboard.svg')}
          des="Apart of NoCode challenge, I built an Human Resources dashboard to make the interviewing process easier for HR professionals "
          tech="Designed in Figma built using Webflow CMS."
          link="https://saas-dashboard.webflow.io/"
        />
      </div>
    </div>
  </div>
)
export default IndexPage
