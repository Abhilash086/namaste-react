import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({item}) => {
    const {cloudinaryImageId, name, avgRating, cuisines} = item.info;

  return (
    <div className="card">
      <img src={CLOUDINARY_URL+cloudinaryImageId} alt="" />
      <h3 className="card-title">{name}</h3>
      <h4 className="card-title">⭐{avgRating}</h4>
      <h4 className="card-title">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;