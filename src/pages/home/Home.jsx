import "./home.scss";

import { NavLink } from "react-router-dom";
import React from "react";
import defaultImg from "../../assets/img.jpg";
import { useGetProductsQuery } from "../../context/api/productApi";

function Home() {
  const { data, error } = useGetProductsQuery({ limit: 100 });
  console.log(data?.data?.products);

  let productData = data?.data?.products?.map((product) => (
    <div className="home__card">
      <NavLink to={`/single/${product.id}`} className="home__card__img">
        <img src={product?.urls[0] ? product?.urls[0] : defaultImg} alt="" />
      </NavLink>
      <div className="home__card__info">
        <h3 className="home__card__title">{product?.title}</h3>
        <p className="home__card__text">Category: {product?.category}</p>

        <p className="home__card__text">Description: {product?.description}</p>
        <p className="home__card__text">Units: {product?.units}</p>
        <p className="home__card__text">Price :{product?.price} $</p>
      </div>
    </div>
  ));

  return (
    <div className="home container">
      <h1>Products</h1>
      <div className="home__cards">{productData}</div>
    </div>
  );
}

export default Home;
