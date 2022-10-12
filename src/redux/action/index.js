// For Add Item to Cart
export const addCart =(products)=>{
    return{
        type:"ADDITEM",
        payload:products
    }
}

// For Delete Item from Cart
export const delCart =(products)=>{
    return{
        type:"DELITEM",
        payload:products
    }
}