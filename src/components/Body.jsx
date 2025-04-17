import { useState } from "react";
import { cards } from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard"

const Body = () => {

  const [resList, setResList] = useState(cards);

    return (
      <div className="bodyContent">
        <div className="filter">
          <button className="btn" 
          onClick={()=>{
            setResList(cards.filter(item=>item.info.avgRating > 4))
          }}>Filter Top Rated</button>
        </div>
        <div className="res-container">
          {resList.map((item, idx)=>{
              return <RestaurantCard key={idx} item={item}/>
          })}
        </div>
      </div>
    );
  };

  export default Body;