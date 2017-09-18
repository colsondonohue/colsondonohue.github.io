import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Photos from '../components/Photos';
import ArrowButtons from '../components/ArrowButtons';

const propTypes = {
  pathContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    next: PropTypes.shape({
      name: PropTypes.string
    }),
    previous: PropTypes.shape({
      name: PropTypes.string
    })
  })
};

const PhotoPage = ({ pathContext: { name, photos, next, previous } }) =>
  <Wrapper>
    <Title>
      {name}
    </Title>
    <Photos photos={photos} />
    <ArrowButtons next={next} previous={previous} />
  </Wrapper>;

PhotoPage.propTypes = propTypes;

export default PhotoPage;
