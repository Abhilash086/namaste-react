import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  const [resList, setResList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const {restaurants} = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
    setResList(restaurants)
  }

  // Conditional rendering
  // if(resList.length === 0){
  //   return <Shimmer />
  // }
    return resList.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="bodyContent">
        <div className="filter">
          <button className="btn" 
          onClick={()=>{
            setResList(cards.filter(item=>item.info.avgRating > 4))
          }}>Filter Top Rated</button>
        </div>
        <div className="res-parent">
          <div className="res-container">
            {resList.map((item, idx)=>{
                return <RestaurantCard key={idx} item={item}/>
            })}
          </div>
        </div>
      </div>
    );
  };

  export default Body;