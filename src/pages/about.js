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
        <h1 class="bigtext">Hello!</h1>
        <p class="bigtext2">
            My name is Daeng Muhammad Feisal, 
            <br></br>
            I am a Product Designer from Indonesia.
            <br></br>
            Currently shifting and learning Product Management role.
            <br></br>
            <br></br>
            I had worked from freelance front-end developer to in-house UX designer. From Agency, Corporate to Startup like <a class="cashbac-text" href="https://cashbac.com/" target="_blank" rel="noopener noreferrer">Cashbac</a>, <a class="labtekindie-text" href="https://labtekindie.com/" target="_blank" rel="noopener noreferrer">Labtek Indie</a>, XPRSV, <a class="map-text" href="https://mizanapps.com/" target="_blank" rel="noopener noreferrer">Mizan Apps Publisher</a>, Mitra Digital and Jojodog Studio.
            <br></br>
            I received my Bachelor of Computer Science from <a class="upi-text" href="http://ww.cs.upi.edu/v2/" target="_blank" rel="noopener noreferrer">Universitas Pendidikan Indonesia</a>.
            <hr></hr>
       </p>
    </Container1>
  </Layout>
);

export default AboutPage;
