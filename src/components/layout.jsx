import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Styles Components
import { Global, css } from '@emotion/core';

// Custom components
import Header from './shared/header';

// Styles
import '../styles/sass/layout-grid.scss';
import '../styles/sass/material-icon.scss';
import '../styles/sass/top-app-bar.scss';
import '../styles/sass/typography.scss';
import '../styles/sass/button.scss';
import '../styles/sass/card-image.scss';

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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
