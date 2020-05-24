import React from 'react';
import PropTypes from 'prop-types';

import { Cell } from '@material/react-layout-grid';
import { Subtitle1, Subtitle2 } from '@material/react-typography';

const CardProduct = ({ name, description, price, image }) => {
  return (
    <Cell desktopColumns={3}>
      <div className="img-hover-zoom">
        <img src={`https:${image}`} alt="" width="100%" />
      </div>
      <div className="mdc-typography">
        <Subtitle1 style={{ paddingBottom: '0' }}>{name}</Subtitle1>
        <Subtitle2 style={{ paddingTop: '.2rem' }}>{description}</Subtitle2>
        <Subtitle1 style={{ paddingTop: '.2rem' }}>{`$ ${price}`}</Subtitle1>
      </div>
    </Cell>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};
export default CardProduct;
