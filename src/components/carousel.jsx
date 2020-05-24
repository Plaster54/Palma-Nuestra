import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row, Cell } from '@material/react-layout-grid';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Carousell = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCarousel {
        gallery {
          imagen {
            fluid {
              src
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Row style={{ paddingTop: '2rem', flex: 'nowrap' }}>
        <Cell desktopColumns={1} />
        <Cell desktopColumns={10}>
          <Carousel
            infinite
            clickToChange
            slidesPerPage={2}
            centered
            dots
            autoPlay={7000}
            animationSpeed={1000}
          >
            {data.contentfulCarousel.gallery.map((item) => (
              <img
                src={`https:${item.imagen.fluid.src}`}
                alt=""
                style={{ width: '95%' }}
              />
            ))}
          </Carousel>
        </Cell>
        <Cell desktopColumns={1} />
      </Row>
    </>
  );
};
export default Carousell;
