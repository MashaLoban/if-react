import React from 'react';
import PropTypes from 'prop-types';
import ItemHome from './ItemHome';

const ItemsHome = (props) => {
  const { data } = props;
  const items = [...data].slice(0, 4);
  return (
    <div className="wrapper__items_home">
      {items.map((item) => (
        <ItemHome
          name={item.name}
          city={item.city}
          country={item.country}
          imageUrl={item.imageUrl}
          key={item.id}
        />
      ))}
    </div>
  );
};

ItemsHome.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ItemsHome;
