import React from 'react'
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'
import {connect} from "react-redux"

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProducts,
    changeProductQuantity,
    isLiked=false
}) => {
        return(
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <button className="like_btn">
                    {isLiked ?  <span><img src="images/products/icon (5).png"/></span> :  <span><img src="images/products/icon (7).png"/></span>}
                </button>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span> 
                         
                    </p>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                </div>
                <Quantity
                    productCount={productCount}
                    onDecrementClick={()=> (productCount === 1 ? removeProducts(product.id) : changeProductQuantity (product.id, productCount -1))}
                    onIncrementClick={()=> changeProductQuantity (product.id, productCount +1)}
                    id={product.id}
                    minCount={0}
                />
                    
                <button className="button_delete" onClick={() => {removeProducts(product.id)}}>Delete product</button>
            </div>
        </div>
)
}
const mapStateToProps = (state, props)=>({
    isLiked:state.productsLikeState[props.product.id],
 })

const mapDispatchToProps = (dispatch)=>({
    changeProductQuantity:  (id,count) => dispatch({
        type:"CHANGE_PRODUCT_QUANTITY",
        id,
        count
    })
})
 
 export default connect (
     mapStateToProps,
     mapDispatchToProps
 )(CartProductListItemExtended)


