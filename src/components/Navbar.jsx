import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar bg-dark shadow-lg">
      <div className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1 text-light">Auth App</span>
        </Link>
        <span className="navbar-brand mb-0 h1">
          {!user ? (
            <>
              <Link to={"/register"}>
                <button className="btn btn-success rounded-0">Register</button>
              </Link>
              <Link to={"/login"}>
                <button className="btn btn-success rounded-0 mx-2">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <button className="btn btn-danger rounded-0" onClick={handleLogout}>
              Logout
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
