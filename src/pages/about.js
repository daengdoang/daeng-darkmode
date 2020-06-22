import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby'

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


const AboutPage = () => (
  <Layout>
    <Container1 class="Container2">
    <SEO title="About Daeng Muhammad Feisal" />
        <h1 class="bigtext">Hello! My name is Daeng.</h1>
        <p class="bigtext2">
            I am a Product Designer from Indonesia.
            <br></br>
            I received my Bachelor in of Computer Science from <a href="https://cs.upi.edu/">Universitas Pendidikan Indonesia</a>.
       </p>
    </Container1>
  </Layout>
);

export default AboutPage;
