import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const propTypes = {
  children: PropTypes.func
};

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Colson Donohue"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header path={window.location.pathname} />
    <Container>
      {children()}
    </Container>
    <Footer />
  </div>;

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;
