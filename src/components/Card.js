import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import githubIcon from 'ionicons-svg/logo-octocat';
import linkIcon from 'ionicons-svg/ios-link';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
  siteLink: PropTypes.string
};

const CardContainer = styled.div`
  display: inline-block;
  text-align: left;
  position: relative;
  vertical-align: top;
  margin: 1rem;
  height: 29rem;
  max-width: 19rem;
  background-color: #ffffff;
  box-shadow: 0 15px 20px 1px rgba(0, 0, 0, .08);
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);
  border-radius: 0.2rem;

  :hover {
    box-shadow: 0 25px 35px 4px rgba(0, 0, 0, .14);
    transform: translate(0, -15px);
  }

  @media (max-width: 365px) {
    height: 30.5rem;
  }
`;

const CardImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  height: 16rem;
  border-radius: 0.2rem 0.2rem 0 0;
`;

const CardContent = styled.div`padding: 1rem;`;

const CardTitle = styled.h3`
  margin-top: 0;
  font-weight: 300;
  margin-bottom: 0.7rem;
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
    display: none;
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

const PlainLink = styled.a`
  color: inherit;
`;

const IconContainer = styled.span`
  vertical-align: middle;
`;

const Card = ({ image, title, body, tags, githubLink, siteLink }) =>
  <CardContainer>
    <CardImage image={image} />
    <CardContent>
      <CardTitle>
        {title}
      </CardTitle>
      <CardBody>
        {body}
      </CardBody>
    </CardContent>
    <TagContainer>
      {tags.map((tag, i) =>
        <Tag key={i}>
          {tag}
        </Tag>
      )}
    </TagContainer>
    <LinkContainer>
      {githubLink
        ? <PlainLink href={githubLink}>
            <Tag>
              GitHub
              <IconContainer dangerouslySetInnerHTML={{ __html: githubIcon }} />
            </Tag>
          </PlainLink>
        : ''}
      {siteLink
        ? <PlainLink href={siteLink}>
            <Tag>
              Live Site
              <IconContainer dangerouslySetInnerHTML={{ __html: linkIcon }} />
            </Tag>
          </PlainLink>
        : ''}
    </LinkContainer>
  </CardContainer>;

Card.propTypes = propTypes;

export default Card;
