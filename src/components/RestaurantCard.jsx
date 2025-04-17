import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({item}) => {
    const {cloudinaryImageId, name, avgRating, cuisines} = item.info;

  return (
    <div className="card">
      <img src={CLOUDINARY_URL+cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>⭐{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;