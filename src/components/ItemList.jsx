import React from 'react';
import { ITEM_CLOUDINARY } from '../utils/constants';

const ItemList = ({itemList}) => {
  return (
    <div className='w-full'>
        {itemList &&
        itemList.map((item, idx) => (
            <div key={idx} className="w-full my-2 flex items-center justify-between p-4 rounded-2xl border-b-2">
                <div className="flex flex-col gap-3 w-full wrap-break-word">
                    {/* {console.log(item)} */}
                    <h3 className="text-xl font-semibold">{item?.card?.info?.name}</h3>
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
                    <p className="text-wrap text-[12px]">{item?.card?.info?.description}</p>
                </div>
                <div className='relative'>
                    <button className='border border-green-500 bg-green-50 rounded-lg text-sm font-semibold absolute py-1 px-4 bottom-0 left-3/6 -translate-x-3/6 cursor-pointer'>Add +</button>
                    <img className="rounded-2xl" src={ITEM_CLOUDINARY + item?.card?.info?.imageId} alt="" />
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList

// {menuData.menuList &&
//   menuData.menuList.map((item, idx) => (
//     <div key={idx} className="border border-zinc-900 m-10 w-full flex items-center justify-between pl-4 rounded-2xl bg-indigo-100">
//       <RestaurantCategory />
//       <div className="flex flex-col gap-3 w-full wrap-break-word">
//         {/* {console.log(item)} */}
//         <h3 className="text-lg font-semibold">{item?.card?.info?.name}</h3>
//         <div className="flex gap-3 items-center">
//           <p className="text-2xl"><strong>₹
//             {item?.card?.info?.price / 100 ||
//               item?.card?.info?.defaultPrice / 100}</strong>
//           </p>
//           <p>
//             <strong>
//               {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐
//             </strong>
//           </p>
//         </div>
//         <p className="text-wrap">{item?.card?.info?.description}</p>
//       </div>
//       <img className="rounded-2xl" src={ITEM_CLOUDINARY + item?.card?.info?.imageId} alt="" />
//     </div>
//   ))}