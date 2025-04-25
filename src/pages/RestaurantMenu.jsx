import { useParams } from "react-router-dom";
import { ITEM_CLOUDINARY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  return (
    <div className="menu">
      <h1>{menuData.name}</h1>
      <h2>Menu</h2>
      {menuData.menuList &&
        menuData.menuList.map((item, idx) => (
          <div key={idx} className="item-menu">
            <div className="item-left">
              {/* {console.log(item)} */}
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
