import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Photos from '../components/Photos';

const propTypes = {
  pathContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

const PhotoPage = ({ pathContext: { name, photos } }) =>
  <Wrapper>
    <Title>
      {name}
    </Title>
    <Photos photos={photos} />
  </Wrapper>;

PhotoPage.propTypes = propTypes;

export default PhotoPage;
