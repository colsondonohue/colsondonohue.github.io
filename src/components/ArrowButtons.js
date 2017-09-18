import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import LeftArrow from 'ionicons-svg/md-arrow-back';
import RightArrow from 'ionicons-svg/md-arrow-forward';
import styled from 'styled-components';
import IconContainer from './IconContainer';

const propTypes = {
  next: PropTypes.shape({
    name: PropTypes.string
  }),
  previous: PropTypes.shape({
    name: PropTypes.string
  })
};

const Button = styled(Link)`
  text-transform: uppercase;
  padding: ${props =>
    props.left ? '0.75em 1.25em 0.75em 0.75em' : '0.75em 1.25em'};
  position: absolute;
  left: ${props => (props.left ? 0 : '')};
  right: ${props => (props.left ? '' : 0)};
  color: ${props => (props.left ? '#4568dc' : '#b06ab3')};
  fill: ${props => (props.left ? '#4568dc' : '#b06ab3')};
  border: ${props => (props.left ? '2px solid #4568dc' : '2px solid #b06ab3')};
  background-color: #ffffff;
  border-radius: 2em;
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);

  :hover {
    color: #ffffff;
    fill: #ffffff;
    border: none;
    background: linear-gradient(to right, #4568dc, #b06ab3);
  }
`;

const Text = styled.span`margin-left: ${props => (props.left ? '0.5em' : '')};`;

const ButtonContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto 5vw;
`;

const ArrowButtons = ({ next, previous }) =>
  <ButtonContainer>
    {previous
      ? <Button left to={`/photos/${previous.name}`}>
          <IconContainer dangerouslySetInnerHTML={{ __html: LeftArrow }} />
          <Text left>prev</Text>
        </Button>
      : ''}
    {next
      ? <Button to={`/photos/${next.name}`}>
          <Text>next</Text>
          <IconContainer dangerouslySetInnerHTML={{ __html: RightArrow }} />
        </Button>
      : ''}
  </ButtonContainer>;

ArrowButtons.propTypes = propTypes;

export default ArrowButtons;
