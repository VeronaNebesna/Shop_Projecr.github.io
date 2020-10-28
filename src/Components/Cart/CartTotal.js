import React from "react"
import ProductsData, { getProductsMap} from "../../app/main/Products/ProductsData"
import {keys} from "lodash"
import {connect} from "react-redux"


const CartTotal = ({
    productsMap  =  getProductsMap(ProductsData),
    productInCart,
}) =>{
    return(
        <div className="totla_price">
            Total price: {
                keys(productInCart).reduce( (total,productId)=>(
                    total + (productsMap[productId].price * productInCart[productId])
                ),0)
                } $
        </div>
    )
}
const mapStateToProps =(state)=>({
    productInCart: state.productsInCart
})

export default connect(
    mapStateToProps
) (CartTotal)