/** @format */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="content">
      <h1> <NavLink to="/">Orishirishi<sup>NG</sup></NavLink> </h1>
      <small>The Hub for Quality Products</small>
      <NavLink to="/cart"> <ShoppingCartIcon fontSize="large"/> </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
