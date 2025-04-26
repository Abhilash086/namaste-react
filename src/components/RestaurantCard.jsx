import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({item}) => {
    const {cloudinaryImageId, name, avgRating, cuisines} = item.info;

  return (
    <div className="card w-[200px] h-[350px] bg-gray-200 rounded-lg">
        <img className="rounded-lg h-[200px] w-full" src={CLOUDINARY_URL+cloudinaryImageId} alt="" />
        <div className="p-2">
          <h3 className="py-1 font-semibold">{name}</h3>
          <h4 className="py-1">⭐{avgRating}</h4>
          <h4 className="py-1">{cuisines.join(", ")}</h4>
        </div>
    </div>
  );
};

export default RestaurantCard;