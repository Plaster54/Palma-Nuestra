import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row, Cell } from '@material/react-layout-grid';
import { Headline1 } from '@material/react-typography';

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLandingPage {
        backgroundImage {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <>
      <Row
        style={{
          backgroundImage: `url(https:${data.contentfulLandingPage.backgroundImage.fluid.src})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'not-repeat',
          width: '100%',
          marginTop: '-4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Cell desktopColumns={12}>
          <Headline1
            style={{
              color: 'white',
              fontFamily: 'Lily Script One, cursive',
            }}
          >
            <b>Palma Nuestra</b>
          </Headline1>
        </Cell>
      </Row>
    </>
  );
};

export default LandingPage;
