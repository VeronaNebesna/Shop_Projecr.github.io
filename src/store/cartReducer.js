import { omit } from "lodash"

const cartReducer = (state={
}, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return{
                ...state,
                [action.id]:(state[action.id] || 0) + action.count
            }
        case "CHANGE_PRODUCT_QUANTITY":
            return{
                ...state,
                [action.id]:(action.count || 0 ) 
            }
        case "REMOVE_PRODUCT_FROM_CART":
            return omit(state, action.id)
            
            default:
                return state
    }
}
export default cartReducer