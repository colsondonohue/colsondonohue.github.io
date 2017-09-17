import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Photo = styled.img`
  width: 90%;
  margin-bottom: 2em;
`;

const PhotoGrid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
`;

const Photos = ({ photos }) =>
  <PhotoGrid>
    {photos.map(photo =>
      <Photo src={require(`../photos/${photo}`)} key={photo} />
    )}
  </PhotoGrid>;

Photos.propTypes = propTypes;

export default Photos;
