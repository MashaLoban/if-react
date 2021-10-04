import React from 'react';
import PropTypes from 'prop-types';

const ItemHome = ({
  name, city, country, imageUrl,
}) => (
  <div className="wrapper__item_home">
    <a href="#urlItemHome">
      <img src={imageUrl} alt="ItemHotel" />
      <p>{name}</p>
      <p>
        {city}
        ,
        <br />
        {country}
      </p>
    </a>
  </div>
);

ItemHome.PropTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ItemHome;
