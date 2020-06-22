import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from '../components/seo';

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


const NotFoundPage = () => (
  <Layout>
    <Container1>
    <SEO title="404" />
    <h1 class="bigtext">You are lost! but don't worry :)</h1>
    <button class="cta1">Back to home</button>
    </Container1>
  </Layout>
);

export default NotFoundPage;
