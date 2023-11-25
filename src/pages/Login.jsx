import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, user , message , isError } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }

    if(isError){
      toast.error(message)
    }

  }, [user, isLoading, isSuccess , isError]);

  if (isLoading) {
    return <h1 className="text-center display-2">Loading...</h1>;
  }
  return (
    <>
      <h1 className="text-center display-2">Login Here</h1>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="form-control my-2 rounded-0 w-100"
          placeholder="Enter Email Here"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="form-control my-2 rounded-0 w-100"
          placeholder="Enter Password Here"
          required
        />
        <button className="btn btn-success rounded-0 w-100 my-2">Log In</button>
      </form>
    </>
  );
};

export default Login;
