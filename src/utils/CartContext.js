import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartInfo, setCartInfo] = useState({
        cartQuantity: 0,
        cartItems: []
    });

    return (
        <CartContext.Provider value={{cartInfo,setCartInfo}}>
            {children}
        </CartContext.Provider>
    )
}

