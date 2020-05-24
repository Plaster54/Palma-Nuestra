import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row, Cell, Grid } from '@material/react-layout-grid';

import CardProduct from './shared/card-product';

const IndexCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        nodes {
          cardImage {
            fixed {
              src
            }
          }
          description
          id
          name
          price
        }
      }
    }
  `);
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={12}>
          <Row>
            {data.allContentfulProduct.nodes.map((item) => (
              <CardProduct
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.cardImage.fixed.src}
              />
            ))}
          </Row>
        </Cell>
      </Row>
    </Grid>
  );
};
export default IndexCard;
