import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

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

const TalksPage = () => (
  <Layout>
    <Container1>
    <SEO title="About Daeng Muhammad Feisal" />
    <h3 class="bigtext">I love to sharing. <br></br>Anything.</h3>
    <h3 class="bigtext2">From UX to Community Development. </h3>
    <br></br>
    <br></br>
    </Container1>
    <hr></hr>

    <Container1>
    <h1 class="talks-text">Information Architecture - Dribbble Surabaya</h1>
    <hr></hr>
    <h1 class="talks-text">Information Architecture - Quix Bootcamp #2 2020</h1>
    <hr></hr>
    <h1 class="talks-text">Information Architecture - Quix Bootcamp #1 2019</h1>
    <hr></hr>
    <h1 class="talks-text">UXID Conference 2019 Web</h1>
    <hr></hr>
    <h1 class="talks-text">Vending Machine Ultrajaya</h1>
    <hr></hr>
    </Container1>
  </Layout>
);

export default TalksPage;
