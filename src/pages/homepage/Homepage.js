/** @format */

import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const [selected, setSelected] = useState(false)
 
  useEffect(() => {
      async function fetchData(){
      const response = await axios.get("https://fakestoreapi.com/products");
      setdata(response.data);
    }
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
            <button className="button-37" onClick={(e)=> {
                setSelected(!selected)
                e.target.style.backgroundColor = selected ? "#00ff00" : "transparent"
                e.target.style.border = selected ? "none" : "2px solid #fed053"  
                if(selected){
                  dispatch({ type: "ADD", payload: item })
                } else {
                  dispatch({ type: "REMOVE", payload: item })
                }
                
            }}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
