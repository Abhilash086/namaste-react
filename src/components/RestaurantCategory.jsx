import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({category,isOpen,setIsOpen, setShowIndex}) => {

    const handleClick= ()=>{
        setShowIndex();
        setIsOpen(!isOpen)
    }

  return (
    <div className='my-5 w-9/12 m-auto shadow-xl'>
        {/* Accordian Header */}
        
        <div
            onClick={handleClick}
            className='flex items-center justify-between bg-gray-200 px-8 py-4 rounded-t-lg cursor-pointer'>
            <span className='font-semibold text-xl'>{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})</span>
            <span className='cursor-pointer'>⬇️</span>
        </div>
        {/* Accordian Body/ Item List */}
        {isOpen && <ItemList itemList={category?.card?.card?.itemCards}/>}
        
    </div>
  )
}

export default RestaurantCategory