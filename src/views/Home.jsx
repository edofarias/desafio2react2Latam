
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import HeartIcon from '../components/HeartIcon';

const Home = () => {
  const { product, meGusta } = useContext(ProductContext);

  return (
    <div className="image-container">
      {product.map((p) => (
        <div key={p.id} className="image-item">
          <span>
            {p.liked && <HeartIcon />}
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

export default Home;


