import React, {Component} from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import Quantity from "../../../Components/Quantity/Quantity"
import "./ProductListItem.css"
import {connect} from "react-redux"

class ProductListItem extends Component{
    state= {
        productCount:1,
    }
    onIncrementClick  = () => {
            this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        })
        )
    }
    onDecrementClick  = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        })
        ) 
    }
 

    render(){
        const{
            name,
            description = "No description...",
            type,
            capacity,
            price,
            image,
            id,
            isLiked=false,
            addLike,
            removeLike,
            addProductsInCart
        }= this.props;
        return(
            <div className = "product-list-item">
                <div className = "product-image">
                   <img src={image} alt=""/>
                </div>
                <button className = "like_button" onClick={()=> isLiked ? removeLike(id): addLike(id)}>
                    {isLiked ?  <span><img src="images/products/icon (5).png"/></span> :  <span><img src="images/products/icon (7).png"/></span>}
                </button>
                <h2 className="product-title">
                    <Link to={`/products/${id}`}>{name}</Link>
                    </h2>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-capacity">Capacity: {capacity}Gb</div>
                <div className="product-price">${price}</div>
               <Quantity
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    id={id}
                    minCount={1}
               />
                <button className ="btn-add-to-cart" onClick={()=> addProductsInCart(id,this.state.productCount)}>Add to cart</button>
            </div>
        )
    }
}




ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

 

const mapStateToProps = (state, props)=>({
   isLiked:state.productsLikeState[props.id]
})
const mapDispatchToProps =(dispatch)=>({
    addLike:(id)=>dispatch({
        type:"LIKE",
        id:id,
    }),
    removeLike:(id)=> dispatch({
        type:"DISLIKE",
        id
    }),
    addProductsInCart:(id, count)=>dispatch({
        type:"ADD_PRODUCT",
        id,
        count,
    })
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ProductListItem)