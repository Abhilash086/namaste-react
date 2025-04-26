import { useParams } from "react-router-dom";
import { ITEM_CLOUDINARY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  return (
    <div className="px-32">
      <h1 className="text-center my-2 font-extrabold text-4xl">{menuData.name}</h1>
      <h2 className="text-center my-4 font-bold text-3xl">Menu</h2>
      {menuData.menuList &&
        menuData.menuList.map((item, idx) => (
          <div key={idx} className="border border-zinc-900 m-10 w-full flex items-center justify-between pl-4 rounded-2xl">
            <div className="flex flex-col gap-3 w-full wrap-break-word">
              {/* {console.log(item)} */}
              <h3 className="text-lg font-semibold">{item?.card?.info?.name}</h3>
              <div className="flex gap-3 items-center">
                <p className="text-2xl"><strong>₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}</strong>
                </p>
                <p>
                  <strong>
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐
                  </strong>
                </p>
              </div>
              <p className="text-wrap">{item?.card?.info?.description}</p>
            </div>
            <img className="rounded-2xl" src={ITEM_CLOUDINARY + item?.card?.info?.imageId} alt="" />
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
