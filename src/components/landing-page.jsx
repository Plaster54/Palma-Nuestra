import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row, Cell } from '@material/react-layout-grid';
import { Headline2 } from '@material/react-typography';

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
          height: '90vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'not-repeat',
          width: '100%',
          marginTop: '5vh',
        }}
      >
        <Cell desktopColumns={12}>
          <Headline2
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '45vh',
            }}
          >
            <b>Palma Nuestra</b>
          </Headline2>
        </Cell>
      </Row>
    </>
  );
};

export default LandingPage;
