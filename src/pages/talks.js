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
    <h3 class="bigtext">I love to sharing.</h3>
        <p class="bigtext2">
            Hi, my name is Daeng. 
            I am a fresh graduate from Bachelor of Computer Science at Indonesia University of Education, Bandung.
            I have been designing since high school, from there I got opportunity to working freelance and part-time in various startup and agency – local and international.
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

export default TalksPage;
