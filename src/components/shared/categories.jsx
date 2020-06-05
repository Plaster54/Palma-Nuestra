import React from 'react';
import { Cell, Row } from '@material/react-layout-grid';
import { useStaticQuery, graphql } from 'gatsby';
import { Headline5 } from '@material/react-typography';

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories {
        nodes {
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  `);
  return (
    <Row>
      <Cell desktopColumns={4}>
        <div
          className="categories-img"
          style={{
            backgroundImage: `linear-gradient(320deg, rgba(249,234,220,1) 0%, rgba(219,105,15,.5) 50%),url(https:${data.allContentfulCategories.nodes[0].images[0].fluid.src})`,
          }}
        >
          <Headline5 className="categories-h5">Otros</Headline5>
        </div>
      </Cell>
      <Cell desktopColumns={4}>
        <div
          className="categories-img"
          style={{
            backgroundImage: `linear-gradient(320deg, rgba(255,191,227,1) 0%, rgba(210,76,144,0.5) 50%),url(https:${data.allContentfulCategories.nodes[0].images[1].fluid.src})`,
          }}
        >
          <Headline5 className="categories-h5">Bolsas</Headline5>
        </div>
      </Cell>
      <Cell desktopColumns={4}>
        <div
          className="categories-img img-hover-zoom"
          style={{
            backgroundImage: ` linear-gradient(320deg, rgba(220,249,249,1) 0%, rgba(0,212,240,0.5) 50%),url(https:${data.allContentfulCategories.nodes[0].images[2].fluid.src})`,
            marginRight: '0px',
          }}
        >
          <Headline5 className="categories-h5">Tenate</Headline5>
        </div>
      </Cell>
    </Row>
  );
};
export default Categories;
