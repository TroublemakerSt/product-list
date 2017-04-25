import React from 'react';

import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <ul className="cd-gallery">
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          thumbs={product.image}
          size={product.size}
          color={product.color}
          onAddToCart={product => console.log(product, 'Add to cart')}
        />
      ))}
    </ul>
  );
}

export default ProductList;
