import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const menuData = useRestaurantMenu(resId);

  return menuData.itemCategory && (
    <div className="px-32">
      <h1 className="text-center my-2 font-extrabold text-3xl">{menuData.name}</h1>
      <h2 className="text-center my-4 font-bold text-2xl">Menu</h2>
      {menuData.itemCategory.map((item, idx)=>{
        return (
          <RestaurantCategory 
              key={idx} 
              category={item}
              isOpen={showIndex === idx}
              setShowIndex={()=>{setShowIndex(showIndex === idx ? null : idx)}}/>
        )
      })}
    </div>
  );
};

export default RestaurantMenu;