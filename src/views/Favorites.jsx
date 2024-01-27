
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import HeartIcon from '../components/HeartIcon';

const Favorites = () => {
  const { product, meGusta } = useContext(ProductContext);

  const favoriteProducts = product.filter((p) => p.liked);

  return (
    <div className="image-container">
      {favoriteProducts.map((p) => (
        <div key={p.id} className="image-item">
          <span>
            <HeartIcon />
          </span>
          <img
            onClick={() => meGusta(p.id)}
            key={p.id}
            src={p.src.medium}
            alt=""
            className="image-item__img"
          />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
