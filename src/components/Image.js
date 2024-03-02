

import React from 'react';
import product from '../product';

const Image = () => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto', width: '100%' }}/>
    </div>
     
  );
}

export default Image;
