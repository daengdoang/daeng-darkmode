import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

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

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <Container1>
    <h1 class="works-text">Cashbac UI Kit</h1>
    <hr></hr>
    <h1 class="works-text">Cashbac Email Template Design</h1>
    <hr></hr>
    <h1 class="works-text">Cashbac Web</h1>
    <hr></hr>
    <h1 class="works-text">UXID Conference 2019 Web</h1>
    <hr></hr>
    <h1 class="works-text">Vending Machine Ultrajaya</h1>
    <hr></hr>
    </Container1>
  </Layout>
)

export default WorksPage
