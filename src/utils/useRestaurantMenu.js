import { useEffect, useState } from "react"


const useRestaurantMenu = (resId)=>{

    const [menuData, setMenuData] = useState({});

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await res.json();
        const categories = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
        setMenuData({
            name: data?.data?.cards[0]?.card?.card?.text,
            itemCategory: categories.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        });
    }

    return menuData;
}

export default useRestaurantMenu;