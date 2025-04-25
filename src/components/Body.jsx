import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    const restaurantsCard = json?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle.restaurants);
    const {restaurants} = restaurantsCard?.card?.card?.gridElements?.infoWithStyle;
    setResList(restaurants);
    setFilteredRes(restaurants);
    
  };

  // Conditional rendering
  // if(resList.length === 0){
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>You're Offline!!! Please check your internet connection!</h1>

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContent">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              setFilteredRes(
                resList.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
              setsearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn1"
          onClick={() => {
            setResList(resList.filter((item) => item.info.avgRating > 4));
          }}
        >
          Filter Top Rated
        </button>
      </div>
      <div className="res-parent">
        <div className="res-container">
          {filteredRes.map((item) => {
            // console.log(item.info.id)
            return <Link className="card-link" key={item.info.id} to={"/restaurants/"+item.info.id}><RestaurantCard item={item} /></Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
