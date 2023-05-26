import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import avatarIcon from '../../../assets/images/avatar-icon.png'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar lg:px-20 lg:pt-5">
    <Tooltip id="my-tooltip" />
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <h2 className="normal-case lg:text-3xl font-semibold lg:font-bold">
          Bibimbap<span className="text-white ps-1">Bites</span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:bg-[#FF4A22] hover:text-white transition duration-300"
                  : "hover:bg-[#FF4A22] hover:text-white transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:bg-[#FF4A22] hover:text-white transition duration-300"
                  : "hover:bg-[#FF4A22] hover:text-white transition duration-300"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex">
            {user?.photoURL ? (
              <div className="avatar placeholder">
                <div className="bg-[#ff4a22] text-neutral-content rounded-full w-12">
                  <img src={user.photoURL} alt="user photo" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName ? user.displayName : "No Name Added"}/>
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-[#ff4a22] text-neutral-content rounded-full w-12">
                  <img
                    src= {avatarIcon}
                    alt=""
                    className="p-2"
                    data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName ? user.displayName : "No Name Added"}
                  />
                </div>
              </div>
            )}

            <button
              className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
