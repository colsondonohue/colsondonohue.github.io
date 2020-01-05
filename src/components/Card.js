import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import githubIcon from 'ionicons-svg/logo-octocat';
import linkIcon from 'ionicons-svg/ios-link';
import IconContainer from './IconContainer';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  githubLink: PropTypes.string,
  siteLink: PropTypes.string,
  horizontal: PropTypes.bool,
  center: PropTypes.bool,
};

const CardContainer = styled.div`
  display: inline-block;
  text-align: left;
  position: relative;
  vertical-align: top;
  margin: 1rem;
  height: ${props => (props.horizontal ? '10rem' : '30rem')};
  max-width: ${props => (props.horizontal ? '1200px' : '19rem')};
  width: ${props => (props.horizontal ? 'calc(100% - 3rem)' : '')};
  background-color: #ffffff;
  box-shadow: 0 15px 20px 1px rgba(0, 0, 0, .08);
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);
  border-radius: 0.2rem;

  :hover {
    box-shadow: 0 25px 35px 4px rgba(0, 0, 0, .14);
    transform: translate(0, -15px);
  }

  @media (max-width: 365px) {
    height: ${props => (props.horizontal ? '10rem' : '30.5rem')};
  }
`;

const CardImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  background-position: ${props => (props.center || props.horizontal ? 'center' : '')};
  height: ${props => (props.horizontal ? '10rem' : '16rem')};
  border-radius: ${props =>
    props.horizontal ? '0.2rem' : '0.2rem 0.2rem 0 0'};
`;

const CardContent = styled.div`padding: 1rem;`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.4rem;
  font-weight: 300;
  text-transform: capitalize;
`;

const CardSubtitle = styled.h4`
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 0.6rem;
`;

const PhotoTitle = styled.h3`
  margin-top: 0;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 0.7rem;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.5rem;
  background: #ffffff;
  color: #000000;
  mix-blend-mode: screen;
  padding: 1rem;
  border-radius: 0.2rem;
`;

const CardBody = styled.p`
  margin-bottom: 0;
  font-size: 0.8rem;
  color: #7f8a93;
`;

const TagContainer = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 0;
  padding: 0 0.7rem 0.7rem;

  ${CardContainer}:hover & {
    display: ${props => (props.cardHasLinks ? 'none' : 'inline-block')};
  }
`;

const Tag = styled.span`
  background-color: #dee1e3;
  font-size: 0.7rem;
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const LinkContainer = TagContainer.extend`
  display: none;

  ${CardContainer}:hover & {
    display: inline-block;
  }
`;

const PlainLink = styled.a`color: inherit;`;

const Card = ({ image, title, subtitle, body, tags, githubLink, siteLink, horizontal, center }) =>
  <CardContainer horizontal={horizontal}>
    <CardImage center={center} image={image} horizontal={horizontal} />
    <CardContent>
      {horizontal
        ? <PhotoTitle>
            {title}
          </PhotoTitle>
        : <div>
            <CardTitle>
              {title}
            </CardTitle>
            <CardSubtitle>
              {subtitle}
            </CardSubtitle>
          </div>}
      {!horizontal &&
        <CardBody>
          {body}
        </CardBody>}
    </CardContent>
    {tags
      ? <TagContainer cardHasLinks={!!(githubLink || siteLink)}>
          {tags.map((tag, i) =>
            <Tag key={i}>
              {tag}
            </Tag>
          )}
        </TagContainer>
      : ''}
    {githubLink || siteLink
      ? <LinkContainer>
          {githubLink
            ? <PlainLink href={githubLink}>
                <Tag>
                  GitHub
                  <IconContainer
                    dangerouslySetInnerHTML={{ __html: githubIcon }}
                  />
                </Tag>
              </PlainLink>
            : ''}
          {siteLink
            ? <PlainLink href={siteLink}>
                <Tag>
                  Live Site
                  <IconContainer
                    dangerouslySetInnerHTML={{ __html: linkIcon }}
                  />
                </Tag>
              </PlainLink>
            : ''}
        </LinkContainer>
      : ''}
  </CardContainer>;

Card.propTypes = propTypes;

export default Card;
