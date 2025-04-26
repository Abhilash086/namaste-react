import { useEffect, useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    <div className="mx-10">
      <div className="flex gap-4 m-4">
        <div className="flex gap-4">
          <input
            type="text"
            className="border border-amber-700 rounded-xl px-3"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="border border-amber-700 rounded-lg cursor-pointer hover:bg-amber-500 px-4 py-1"
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
          className="border border-amber-700 rounded-lg cursor-pointer hover:bg-amber-500 px-4 py-1"
          onClick={() => {
            setResList(resList.filter((item) => item.info.avgRating > 4));
          }}
        >
          Filter Top Rated
        </button>
      </div>
      <div className="res-parent">
        <div className="flex flex-wrap px-4 gap-6">
          {filteredRes.map((item) => {
            // console.log(item.info.sla.slaString)
            return (
              <Link className="card-link" key={item.info.id} to={"/restaurants/"+item.info.id}>
                {item.info.sla.slaString ? <RestaurantCardPromoted item={item}/> : <RestaurantCard item={item} />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
