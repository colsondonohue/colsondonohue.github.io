import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Photo = styled.img`
  max-width: 90%;
  margin-bottom: 2em;
  max-height: 100vh;

  @media (max-width: 400px) {
    margin-bottom: 1em;
  }
`;

const PhotoGrid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
`;

class Photos extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  state = {
    photosToShow: 8
  };

  ticking = false;

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);
    if (
      ((window.innerWidth < 800 && distanceToBottom < 550) ||
        distanceToBottom < 350) &&
      this.state.photosToShow < this.props.photos.length
    ) {
      this.setState({ photosToShow: this.state.photosToShow + 8 });
    }
    this.ticking = false;
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => this.update());
    }
  };

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll);
  }

  render() {
    const { photos } = this.props;
    return (
      <PhotoGrid>
        {photos
          .slice(0, this.state.photosToShow)
          .map(photo =>
            <Photo src={require(`../photos/${photo}`)} key={photo} />
          )}
      </PhotoGrid>
    );
  }
}

export default Photos;
