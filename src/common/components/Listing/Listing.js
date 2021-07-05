import React from 'react';
import Card from '../Card/index';

const Listing = ({ items, onView }) => (
  <>
    {items?.map((item) => (
      <Card onView={onView} key={item.id} user={item} />
    ))}
  </>
);

export default Listing;
