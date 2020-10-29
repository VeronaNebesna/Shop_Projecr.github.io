import React from "react"
import {Link} from "react-router-dom"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductsList from "../../../Components/Cart/CartProductsList"
import "./cart.css"
import {connect} from "react-redux"




const Cart =  ({
            productInCart,
        }) => {
        return (
            <div className="cart text-center">
                <CartProductsList productInCart={productInCart}/>
                <div>
                    <CartTotal  productInCart ={ productInCart}/>
                </div>
                <Link to="/cart">Show cart</Link>
            </div>
        )
}

const  mapStateToProps = (state)=>({
    productInCart: state.productsInCart
})
const mapDispatchToProps = (dispatch)=>({
    changeProductQuantity:  (id,count) => dispatch({
        type:"CHANGE_PRODUCT_QUANTITY",
        id,
        count
    })
})
export default connect(
    mapStateToProps,
    mapDispatchToProps 
) (Cart)