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


const AboutPage = () => (
  <Layout>
    <Container1 class="Container2">
    <SEO title="About Daeng Muhammad Feisal" />
    <h3 class="bigtext">It’s a nice to
meet you here</h3>
        <p class="bigtext2">
        We are braver and wiser because they existed, those strong women and strong men... We are who we are because they were who they were. It's wise to know where you come from, who called your name.
        </p>
        <p class="bigtext2">
        - Maya Angelou
        </p>
        <p class="paragraph1">
            I’m passionate about all areas of design and I believe in design as a better approach to solving human problem. My interests in design include interaction design, accessibility, and technological design.
            In between my works, I do front-end development and mentoring designer to code. I believe with coding, designer can create more impactful experiences by embracing the technicalities that make it happens. 
            I enjoy writing HTML, CSS, Javascript and React.
            I’m always excited to connect with everyone and am open to speaking opportunities, so please don’t hesitate to get in touch. Anyway, thanks for viewing my portfolio!
        </p>
    </Container1>
  </Layout>
);

export default AboutPage;
