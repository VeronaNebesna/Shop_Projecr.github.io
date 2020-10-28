import React from "react"
import ProductsData, {getProductsMap} from "../Products/ProductsData"
import "./ProductPage.css"

const ProductPage = ({
    match,
    productsMap  =  getProductsMap(ProductsData),
}) =>{
    // console.log(match)
    return(
        <div className="page_product">
            <h1 className="page-title "> {productsMap[match.params.productId].name}</h1>
            <div className = "product-image">
                   <img src={productsMap[match.params.productId].image} alt=""/>
            </div>
           <div className="title_of_item">
                Description: <span className="description_of_item"
                    dangerouslySetInnerHTML={{
                        __html:productsMap[match.params.productId].description_full
                    }}
                ></span>
            </div>
            <div className="title_of_item">
                Type: <span className="description_of_item type_of_product">{productsMap[match.params.productId].type}</span>
            </div>
            <div className="title_of_item">
                Capacity: <span className="description_of_item">{productsMap[match.params.productId].capacity} Gb</span>
            </div>
            <div className="title_of_item">
                Price: <span className="description_of_item">{productsMap[match.params.productId].price} $</span>
            </div>
        </div>
    )
}

export default ProductPage
