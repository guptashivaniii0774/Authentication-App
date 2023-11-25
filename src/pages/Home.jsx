import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return <h1 className="text-center display-2">Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center display-2">Welcome {user?.name}</h1>
    </>
  );
};

export default Home;
