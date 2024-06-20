import React from "react";
import { useState } from "react";

function useGetValue(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange };
}

export default useGetValue;
