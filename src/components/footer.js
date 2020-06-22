import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100vw;
  height: 17vh;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  cursor: default;
  text-align: center;

`

const LinksItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
  user-select: none;
`

const Footer = ({ isDark, setIsDark }) => (
  <Container>
  <h4 class="footertext">© 2020 Daeng Muhammad Feisal</h4>
  <Links >
    <LinksItem>
        <Link class="footertext" to='https://www.dribbble.com/daengdoang'>
        Dribbble
        </Link>
    </LinksItem>/
    <LinksItem>
        <Link class="footertext" to='https://www.dribbble.com/daengdoang'>
        Github
        </Link>
    </LinksItem>/
    <LinksItem>
        <Link class="footertext" to='https://www.dribbble.com/daengdoang'>
        Twitter
        </Link>
    </LinksItem>/
    <LinksItem>
        <Link class="footertext" to='https://www.dribbble.com/daengdoang'>
        Pinterest
        </Link>
        </LinksItem>
  </Links>
  </Container>
)

export default Footer
