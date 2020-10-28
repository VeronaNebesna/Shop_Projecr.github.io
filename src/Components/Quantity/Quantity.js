import React from "react"


const Quantity =({
    productCount,
    onIncrementClick,
    onDecrementClick,
    id,
    minCount
}) => {
        return(
        <div>
             <div className="product-quantity">
                    <button onClick={()=> onDecrementClick(id)} disabled={productCount <=minCount}>-</button>
                    <input type="text" value = {productCount} readOnly/>
                    <button onClick={ ()=> onIncrementClick(id)}disabled={productCount >=5}>+</button>
                </div>
               
        </div>
    )
    
}

export default Quantity