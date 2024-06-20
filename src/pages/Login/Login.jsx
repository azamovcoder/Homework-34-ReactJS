import "./Login.scss";

import React, { useEffect } from "react";

import useGetValue from "../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";
import { useSignUserMutation } from "../../context/api/userApi";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

function Login() {
  const { formData, handleChange } = useGetValue(initialState);
  const [SignIn, { data, isSuccess, isError, error, isLoading }] =
    useSignUserMutation();
  console.log(formData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      navigate("/admin");
      localStorage.setItem("x-auth-token", data.data.token);
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    SignIn(formData);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__form" action="">
        <h2>Login</h2>
        <input
          value={formData.UserName}
          onChange={handleChange}
          name="UserName"
          type="text"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <button disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
