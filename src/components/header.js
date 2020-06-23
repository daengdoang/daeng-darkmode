import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'

const links = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Works',
    href: '/works',
  },
  {
    title: 'Talks',
    href: '/talks',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const Container = styled.div`
  max-width: 100vw;
  height: 17vh;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-left: auto;
  padding-right: 40px;
  cursor: default;
  text-align: center;
  display: grid block;

`

const LinksItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-left: 18px;
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
  user-select: none;
`

const Header = ({ isDark, setIsDark }) => (
  <Container>
    <Link to="/">
      <span class="icon-daeng">dae.ng</span>
    </Link>
    <Links>
      {links.map(link => (
        <LinksItem key={link.href}>
          <Link class="headertext"
            to={link.href}
          >
            {link.title}
          </Link>
        </LinksItem>
      ))}
    </Links>
    <Icon isDark={isDark} setIsDark={setIsDark} />
  </Container>
)

export default Header
