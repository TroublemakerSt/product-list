import React from 'react';
import ReactDOM from 'react-dom';

import data from '../data';
import ProductList from './containers/ProductList';

function App({ data }) {
  return (
    <main>
      <ProductList products={data} />
    </main>
  );
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));
