import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: calc(-9rem - 12vw);
  margin-bottom: calc(-5rem - 5vw);
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;

  @media(max-width: 416px) {
    margin-top: calc(-12rem - 12vw);
  }
`;

export default Container;
