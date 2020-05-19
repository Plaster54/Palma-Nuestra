/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';

// Material components
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarIcon,
} from '@material/react-top-app-bar';

import MaterialIcon from '@material/react-material-icon';

import '../styles/sass/top-app-bar.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        title
        logo {
          fixed {
            src
          }
        }
      }
    }
  `);
  return (
    <>
      <div>
        <TopAppBar
          dense
          style={{
            paddingTop: '2%',
            paddingBottom: '2%',
            backgroundColor: 'black',
          }}
        >
          <TopAppBarRow>
            <TopAppBarSection
              align="start"
              role="toolbar"
              style={{ marginLeft: '6vw' }}
            >
              <img
                src={`https:${data.contentfulHeader.logo.fixed.src}`}
                alt="Imagen principal"
                style={{ width: '8rem', opacity: '1' }}
              />
            </TopAppBarSection>
            <TopAppBarSection
              role="toolbar"
              align="end"
              style={{ marginRight: '8vw' }}
            >
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/')}
              >
                INICIO
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/nosotros')}
              >
                NOSOTROS
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/proyectos')}
              >
                PROYECTOS
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/programas')}
              >
                PROGRAMAS
              </TopAppBarTitle>
              <TopAppBarTitle className="mdc-header-components">
                BLOG
              </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" style={{ paddingRight: '4vw' }}>
              <TopAppBarIcon actionItem>
                <MaterialIcon hasRipple icon="menu" />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </div>
    </>
  );
};

export default Header;
