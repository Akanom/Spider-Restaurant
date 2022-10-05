import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cartbtn() {
  return (
    <>
       <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className='fa fa-shopping-cart me-1'></span> Cart(0)
        </NavLink> 
    </>
  )
}
