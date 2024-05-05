import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .then((error) => {
        console.error(error.message);
      });
  };

  const navLink = (
    <>
      <Link to="/">Home</Link>
      {user && <Link to="/Booking">Booking</Link>}
    </>
  );
  return (
    <div className="navbar bg-base-100 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="">
            <p>{user?.email}</p>
            <button onClick={handleLogOut} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/Login" className="btn">
              Login
            </Link>
            <Link to="/Registration" className="btn">
              Registration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
