import React from "react"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductsList from "../../../Components/Cart/CartProductsList"
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended"
import { connect } from "react-redux"


const CartPage =({
	productInCart,
	removeProducts,
	changeProductQuantity,
}) =>{
		return(
			<div>
			<h1 className = "page-title">Cart page</h1>
			<div className ="cart_price">

{/*Виведення списку доданих продуктів */}
		<CartProductsList 
			productInCart={productInCart}	
			CartItem = {CartProductListItemExtended}
			removeProducts = {removeProducts}
			changeProductQuantity ={changeProductQuantity }
			/>

		<div className = "total_price">

 {/*Виведення загальної суми  */}
		<CartTotal
			productInCart ={productInCart}
		/> 
		</div>
	</div>
</div>
		)
	}

	
const mapStateToProps =(state)=>({
	productInCart:state.productsInCart
})
const mapDispatchToProps = (dispatch)=>({
	removeProducts: (id)=>dispatch({
		type:"REMOVE_PRODUCT_FROM_CART",
		id
	})
})
export default connect(
	mapStateToProps,
	mapDispatchToProps 
) (CartPage)