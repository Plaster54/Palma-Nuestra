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
        className="landing-img"
        style={{
          backgroundImage: `url(https:${data.contentfulLandingPage.backgroundImage.fluid.src})`,
        }}
      >
        <Cell desktopColumns={12}>
          <Headline1
            style={{
              color: 'white',
              fontFamily: 'Cambria, bold',
            }}
          >
            <b>PALMA NUESTRA</b>
          </Headline1>
        </Cell>
      </Row>
    </>
  );
};

export default LandingPage;
