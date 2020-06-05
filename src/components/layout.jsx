import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Styles Components
import { Global, css } from '@emotion/core';

// Custom components
import Header from './shared/header';
import Footer from './shared/footer';

// Styles
import '../styles/sass/layout-grid.scss';
import '../styles/sass/material-icon.scss';
import '../styles/sass/top-app-bar.scss';
import '../styles/sass/typography.scss';
import '../styles/sass/button.scss';
import '../styles/sass/card-image.scss';
import '../styles/sass/header.scss';
import '../styles/sass/categories.scss';
import '../styles/sass/landing-page.scss';
import '../styles/sass/tab-bar.scss';
import '../styles/sass/icon-button.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulHeader {
        title
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header title={data.contentfulHeader.title} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
