import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const FooterWrapper = styled.footer`
  background: #B06AB3;  /* fallback for old browsers */
  background: linear-gradient(to right, #4568DC, #B06AB3);
  position: relative;

  &::after {
    position: absolute;
    content: '';
    pointer-events: none;
    top: -60%;
    left: -25%;
    width: 150%;
    height: 75%;
    background: #F8F9F9;
    transform: rotate(3deg);
    z-index: 1;
  }
`;

const FooterLinkContainer = styled.div`
  display: block;
  padding: calc(7em + 5vh) 0 calc(1em + 5vh);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterLink = styled.a`
  text-transform: uppercase;
  display: inline-block;
  margin: 1.5em;
  font-weight: 700;
  letter-spacing: 0.5em;
  font-size: 2em;
  color: #FFFFFF;

  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Footer = () =>
  <FooterWrapper>
    <FooterLinkContainer>
      <FooterLink href="https://github.com/colsondonohue">GitHub</FooterLink>
      <FooterLink href="https://500px.com/colsondonohue">500px</FooterLink>
      <FooterLink href="https://www.last.fm/user/colsondonohue">Last.fm</FooterLink>
    </FooterLinkContainer>
  </FooterWrapper>;

export default Footer;
