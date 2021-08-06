import { SET_PURCHASES } from "../actions";
import { ADD_PURCHASE } from "../actions"

const initialState = []

 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PURCHASES:
            return action.purchases
        case ADD_PURCHASE:
            return [...state, action.purchase]
        default:
            return state
        
            
            //action.purchases is the second part of the SET_PURCHASE action
    }
 }

 export default reducer