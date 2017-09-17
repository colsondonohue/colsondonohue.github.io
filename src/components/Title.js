import styled from 'styled-components';

const Title = styled.h2`
  color: ${props => props.secondary ? '#000000' : '#ffffff'};
  text-align: center;
  font-weight: 300;
  text-transform: lowercase;
  letter-spacing: 0.2rem;
`;

export default Title;
