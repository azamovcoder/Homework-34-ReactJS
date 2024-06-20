import "./single.scss";

import React from "react";
import { useGetProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetProductQuery(id);
  const singleData = data?.data;
  return (
    <div className="single container">
      {data && (
        <>
          <div className="single__img">
            <img src={singleData?.urls[0]} alt={singleData?.title} />
          </div>
          <div className="single__info">
            <h1 className="single__title"> {singleData?.title}</h1>
            <h3 className="single__price">Price: {singleData?.price}$</h3>
            <p className="single__text">
              Description: {singleData?.description}
            </p>
            <p className="single__text">Units: {singleData?.units}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Single;
