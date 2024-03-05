import React from 'react'
import {MenuList} from '../Helpers/MenuList';
import MenuItem from '../Components/MenuItem';
import '../Styles/Menu.css'

export default function Menu() {
    return (
    <div className='Menu'>
            <h1 className='menuTittle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}/>;
            }) }
        </div>
    </div>
    )
}
