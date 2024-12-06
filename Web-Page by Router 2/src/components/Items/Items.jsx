import React from 'react';
import './Items.css';
import { EcomProducts } from '../../EcomProducts';

const Items = () => {
  return (
    <div className="items-container">
      {EcomProducts.map((product) => (
        <div className="col4" key={product.id}>
          <img src={product.images} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <div className="rating">
            {[5, 4, 3, 2, 1].map((rating) => (
              <React.Fragment key={rating}>
                <input
                  type="radio"
                  id={`star-${rating}-${product.id}`}
                  name={`rating-${product.id}`}
                  value={rating}
                />
                <label htmlFor={`star-${rating}-${product.id}`}></label>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
