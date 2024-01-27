
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const pedirInfo = async () => {
    try {
      const response = await fetch('https://api.pexels.com/v1/search?query=nature', {
        headers: {
          Authorization: '6XXLUibOvV2v6VqdoTc1gfBpogDShwE1Mvf2ppNYSLMkroRWzxAB5txy' // 
        }
      });

      const data = await response.json();
      setProduct(data.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const meGusta = (id) => {
    setProduct(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  useEffect(() => {
    pedirInfo();
  }, []);

  const [product, setProduct] = useState([]);

  return (
    <ProductContext.Provider value={{ product, setProduct, meGusta }}>
      {children}
    </ProductContext.Provider>
  );
};
