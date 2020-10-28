import React from "react"
const CartProductListItem = ({
    product,
    productCount,
}) =>{
    return(
        <div>
            <div>
                {product.name}: {productCount}
            </div>
        </div>
    )
}




export default CartProductListItem