import { useEffect, useState } from "react"


const useRestaurantMenu = (resId)=>{

    const [menuData, setMenuData] = useState({});

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        console.log(resId)
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await res.json();
        const menuCard = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((item) => item?.card?.card?.itemCards) || data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((item) => item?.card?.card?.itemCards)
        // console.log(menuCard)
        setMenuData({
            name: data?.data?.cards[0]?.card?.card?.text,
            menuList: menuCard?.card?.card?.itemCards
        });
    }

    return menuData;
}

export default useRestaurantMenu;