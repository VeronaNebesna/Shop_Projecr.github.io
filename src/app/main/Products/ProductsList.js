import React from "react"
import ProductListItem from "./ProductListItem"
import ProductsData from "./ProductsData"


const ProductsList =() =>{
    return(
        <div>
            <h1 className = "page-title">Products List</h1>
            <div className="row">
                {
                 ProductsData.map(({
                     id,
                     name,
                     price,
                     description,
                     capacity,
                     type,
                     image,
                 })=>(
                    <div className="col-lg-6" key={id}>
                        <ProductListItem
                        name={name}
                        description= {description}
                        type={type}
                        capacity = {capacity}
                        price = {price}
                        image={image}
                        id={id}
                        />
                    </div>  
                
                ))

                }
                
            </div>
        </div>
    )
}

export default ProductsList