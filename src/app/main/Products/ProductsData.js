const ProductsData = [
    {
    id:1,
    name:"Iphone X",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description_full:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type:"phone",
    screen_size:  '7 inches',
    capacity:64,
    price:500,
    image:"images/products/icon (10).png"
},
{
    id:2,
    name:"Iphone XS", 
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description_full:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type:"phone",
    capacity:128,
    screen_size:'7 inches',
    price:800,
    image:"images/products/icon (11).png"
},
{
    id:3,
    name:"Iphone 8 plus",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description_full:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type:"phone",
    screen_size:'7 inches',
    capacity:256,
    price:1500,
    image:"images/products/icon (12).png"
},
{
    id:4,
    name:"Iphone 7",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description_full:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type:"phone",
    capacity:65,
    screen_size:'7 inches',
    price:1000,
    image:"images/products/icon (13).png"
}
]




export const getProductsMap = (array) =>{
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}


export default ProductsData