import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const HeaderWrapper = styled.header`
  background: #4568dc; /* fallback for old browsers */
  background: linear-gradient(to right, #b06ab3, #4568dc);
  position: relative;

  &::after {
    position: absolute;
    content: '';
    pointer-events: none;
    bottom: -68%;
    left: -25%;
    width: 150%;
    height: 75%;
    background: #f8f9f9;
    transform: rotate(-3deg);
  }
`;

const LogoSpan = styled.span`
  background: #ffffff;
  color: #000000;
  mix-blend-mode: screen;
  padding: 0.75em;
  margin-right: 0.75em;
  border-radius: 0.2rem;
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: calc(0.75rem + 2.5vw);
  letter-spacing: 0.3em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 4em 0 9em;
  margin: 0;
  display: block;

  @media (max-width: 416px) {
    padding-bottom: 11em;
  }
`;

const HeaderLink = styled(Link)`
  color: inherit;

  :hover {
    color: rgba(255, 255, 255, 0.8);
  }

  :hover ${LogoSpan} {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Header = () =>
  <HeaderWrapper>
    <Logo>
      <HeaderLink to="/">
        <LogoSpan>Colson</LogoSpan>
        Donohue
      </HeaderLink>
    </Logo>
  </HeaderWrapper>;

export default Header;
