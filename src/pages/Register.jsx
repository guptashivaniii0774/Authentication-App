import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, isSuccess , isError , message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    dispatch(register(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }

    if(isError){
      toast.error(message)
   
    }


  }, [user , isSuccess , isError , message]);

  if (isLoading) {
    return <h1 className="text-center display-2">Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center display-2">Register Here!</h1>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control my-2 rounded-0 w-100"
          placeholder="Enter Name Here"
          required
        />

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
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={handleChange}
          className="form-control my-2 rounded-0 w-100"
          placeholder="Confirm Password"
          required
        />
        <button className="btn btn-success rounded-0 w-100 my-2">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
