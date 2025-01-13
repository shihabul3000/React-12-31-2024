import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../../assets/user.png";
import { useContext } from "react";
import { AuthContex } from "../../../../Providers/AuthProvider";

const Navbar = () => {
  const { user , logOut } = useContext(AuthContex);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* User Section */}
      <div className="navbar-end">
        <div className="w-10 h-10 rounded-full btn btn-ghost btn-circle avatar">
          <img src={userDefaultPic} alt="User Avatar" />
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn ml-2">Sign Out</button>
        ) : (
          <Link to="/login">
            <button className="btn ml-2">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
