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

import '../../styles/sass/top-app-bar.scss';

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
          style={{
            paddingTop: '1%',
            paddingBottom: '3%',
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <TopAppBarRow>
            <TopAppBarSection
              align="start"
              role="toolbar"
              style={{
                marginLeft: '3vw',
                width: '1rem',
                flexWrap: 'wrap',
                paddingTop: '0',
              }}
            >
              <img
                src={`https:${data.contentfulHeader.logo.fixed.src}`}
                alt="Imagen principal"
                style={{ width: '9rem' }}
              />
            </TopAppBarSection>
            <TopAppBarSection
              role="toolbar"
              style={{
                marginRight: '8vw',
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
              }}
            >
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/')}
              >
                INICIO
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/')}
              >
                NOSOTROS
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/')}
              >
                PROYECTOS
              </TopAppBarTitle>
              <TopAppBarTitle
                className="mdc-header-components"
                onClick={() => navigate('/')}
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
