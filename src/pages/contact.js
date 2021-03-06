import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'

const Container1 = styled.div`
  max-width: 100vw;
  margin: 0 10rem;

  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`


const ContactPage = () => (
  <Layout>
    <Container1>
    <SEO title="Contact" />
    <h3 class="bigtext1">I'm always ready for one shot (and more) of espresso!</h3>
        <p class="bigtext2">Let’s talk about anything from design, politic, education, social enterprise and about space!</p>
        <a href='mailto:daengmfeisal@gmail.com' target="_blank" rel="noopener noreferrer">
        <button class="cta1">Email Me</button>
        </a>
    </Container1>

  </Layout>
)

export default ContactPage
