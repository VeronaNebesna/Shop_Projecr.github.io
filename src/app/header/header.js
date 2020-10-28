import React from "react"
import Logo from "./logo/logo"
import  Menu from "./menu/menu"
import  Cart from "./cart/Cart"

import "./header.css"
import ProductsData from "../main/Products/ProductsData"
import { Route } from "react-router-dom"


const Header = () =>{
	return(
		<div>
            <header className="header">
				<div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo">
                                     <Logo/>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                    <Menu/>
                                </div>
                                <div className="col-lg-3">
                                    <Cart/>
                               </div>
                    </div>
                </div>
            </header>
		</div>
	)
}


export default Header