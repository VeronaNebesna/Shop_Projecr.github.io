import React from "react"
import ProductsData, { getProductsMap} from "../../app/main/Products/ProductsData"
import {keys} from "lodash"

import CartProductListItem  from "../../Components/Cart/CartProductListItem"


const CartProductsList =({
    productInCart,
    productsMap  =  getProductsMap(ProductsData),
    CartItem = CartProductListItem ,
    removeProducts,
    changeProductQuantity,
}) => { return(
        <div>
            {
                keys(productInCart).map((productId) => (
                    <CartItem
                        product={productsMap[productId]} 
                        productCount = {productInCart[productId]}
                        key = {productId}
                        removeProducts ={removeProducts}
                        changeProductQuantity ={changeProductQuantity }
                    />
                ))
            }
        </div>)
    }



export default CartProductsList