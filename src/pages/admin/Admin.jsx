import "./admin.scss";

import React, { useState } from "react";

import LocalImg from "./LocalImg";
import { useCreateProductMutation } from "../../context/api/productApi";
import useGetValue from "../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

function Admin() {
  const { formData, handleChange } = useGetValue(initialState);
  const [file, setFile] = useState("");
  const [createProduct, { data, error, isLoading }] =
    useCreateProductMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify([formData.info]));
    Array.from(file).forEach((img) => {
      form.append("files", img, img.name);
    });

    createProduct(form);
    createProduct(initialState);
  };

  return (
    <div className="admin container">
      <div className="admin__logOut"></div>
      <form onSubmit={handleSubmit} action="">
        <input
          required
          value={formData.title}
          onChange={handleChange}
          name="title"
          title="text"
          placeholder="title"
        />
        <input
          required
          value={formData.price}
          onChange={handleChange}
          name="price"
          title="number"
          placeholder="price"
        />
        <input
          required
          value={formData.oldPrice}
          onChange={handleChange}
          name="oldPrice"
          title="number"
          placeholder="oldPrice"
        />
        <input
          required
          value={formData.category}
          onChange={handleChange}
          name="category"
          title="text"
          placeholder="category"
        />
        <input
          required
          value={formData.units}
          onChange={handleChange}
          name="units"
          title="text"
          placeholder="units"
        />
        <input
          required
          value={formData.description}
          onChange={handleChange}
          name="description"
          title="text"
          placeholder="description"
        />
        <input
          required
          value={formData.info}
          onChange={handleChange}
          name="info"
          title="text"
          placeholder="info"
        />
        <div className="admin__file">
          <input
            required
            onChange={(e) => setFile(e.target.files)}
            multiple
            type="file"
            accept="image/*"
          />
          <LocalImg file={file} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Admin;
