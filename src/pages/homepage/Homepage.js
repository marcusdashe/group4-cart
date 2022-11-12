/** @format */

import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>₦{(item.price * 90).toFixed(2)}</h3>
            <button className="button-37" onClick={(e) =>{ 
              e.target.style.backgroundColor = "#00ff00"
              e.target.style.border = "none"
              dispatch({ type: "ADD", payload: item })}}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;