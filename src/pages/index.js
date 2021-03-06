import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const Container1 = styled.div`
  max-width: 100vw;
  margin: 0 10rem;
  padding-top: 5rem;
  padding-bottom: 10rem; 
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Container2 = styled.div`
  max-width: 100vw;
  margin: 0 10rem;
  padding-top: 5rem;
  padding-bottom: 10rem; 
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Homepage - Daeng Muhammad Feisal" />
    <Container1>
      <h3 class="bigtext3">Daeng Muhammad Feisal - Product Designer from Indonesia</h3>
      <h1 class="bigtext">
        Empathize,<br></br>
        Design,<br></br>
        Repeat.
      </h1>
      <p>I transform thorny problems into delightful solutions using visual design, rapid prototyping, <br></br>and interaction design skills.</p>
      <Link to="/about">
        <button class="cta1">
            View Profile
        </button>
      </Link>
      <button class="cta1">Resume</button>
    </Container1>
    <hr></hr>
    <Container2>
      <h3 class="bigtext2">Selected Work</h3>
      <h1 class="bigtext">Kindly check my featured works</h1>
      <Link to="/works" >
        <button class="cta1">
            View Works
        </button>
      </Link>
      <a href='https://behance.net/daengdoang' target="_blank" rel="noopener noreferrer">
        <button class="cta-behance">Behance</button>
      </a>
    
      <a href='https://dribbble.com/daengdoang' target="_blank" rel="noopener noreferrer">
        <button class="cta-dribbble">Dribbble</button>
      </a>

    </Container2>


  </Layout>
)

export default IndexPage
