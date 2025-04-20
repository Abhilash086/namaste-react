import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITEM_CLOUDINARY } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState({});
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    setMenuData({
      name: data?.data?.cards[0]?.card?.card?.text,
      menuList:
        data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards ||
        data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards,
    });
    console.log(data);
  };

  return (
    <div className="menu">
      <h1>{menuData.name}</h1>
      <h2>Menu</h2>
      {menuData.menuList &&
        menuData.menuList.map((item, idx) => (
          <div key={idx} className="item-menu">
            <div className="item-left">
              {console.log(item)}
              <h3>{item?.card?.info?.name}</h3>
              <p>
                <strong>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐
                </strong>
              </p>
              <p>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p>{item?.card?.info?.description}</p>
            </div>
            <img src={ITEM_CLOUDINARY + item?.card?.info?.imageId} alt="" />
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
