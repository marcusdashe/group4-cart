
import { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton'; 
import { Cartcontext } from "../../context/Context";






import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  console.log(state.length)
  
  return (
    <div className="nav">
      <div className="content">
      <h1> <NavLink to="/">Orishirishi<sup>NG</sup></NavLink></h1>
      <small>The Hub for Quality Products</small>
      <NavLink to="/cart"> 
          <IconButton aria-label="cart">
            <Badge badgeContent={state.length} color="success">
              <ShoppingCartIcon fontSize="large" style={{color: '#fed053'}}/> 
             </Badge> 
          </IconButton> 
      </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
