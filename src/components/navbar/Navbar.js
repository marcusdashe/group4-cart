/** @format */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Welcome to Group4 e-Marketplace</NavLink>
      <NavLink to="/cart"> <ShoppingCartIcon fontSize="large"/> </NavLink>
    </div>
  );
};

export default Navbar;
