import React from "react"
import {Route} from "react-router-dom"
import ProductsList from "./Products/ProductsList"
import CartPage from "./CartPage/CartPage"
import ShippingPage from "./ShippingPage/ShippingPage"
import PaymentPage from "./PaymentPage/PaymentPage"
import ProductPage from './ProductPage/ProductPage'
import Filter from "./Filter/Filter"


const Main = () =>{
	return(
		<div>
			<main className="main">
				<div className="container">
					<div className="row">
						<aside className="col-lg-3">
						<Route path ="/"  exact render ={() =>(
									<Filter/>
							)}/>
							
						</aside>
						<div className="col-lg-9">
						
							<Route path ="/"  exact render ={() =>(
									<ProductsList/>
							)}/>
							<Route path="/cart" render = {() => (
								<CartPage/>
							)}/>
							<Route path = "/shipping" component = {ShippingPage}/>
							<Route path="/payment" component ={PaymentPage}/>
							<Route path="/products/:productId" component ={ProductPage}/>
						</div>
					</div>
				</div>
			</main> 
		</div>
	)
}

export default Main
