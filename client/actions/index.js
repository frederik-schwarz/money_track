import { getAllPurchases } from '../apis/purchasesApi'
import { addPurchase } from '../apis/purchasesApi'
import { deletePurchase } from '../apis/purchasesApi'

export const DELETE_PURCHASE = 'DELETE_PURCHASE'
export const SET_PURCHASES = 'SET_PURCHASES'
export const ADD_PURCHASE = 'ADD_PURCHASE'

const setPurchases = (purchases) => {
    console.log('this is the actions file')
    return {
        type: SET_PURCHASES,
        purchases
        //Line above is action.purchase in the reducer file
    }
}
const addNewPurchaseToStore = (purchase) => {
    return {
        type: ADD_PURCHASE,
        purchase
    }
}
const removePurchase = (purchaseDel) => {
    return {
    type: DELETE_PURCHASE,
    PurchaseId: purchaseDel
    }
}

//setAllPurchases will need to be used in use effect in componets
export const setAllPurchases = () => {
    return (dispatch) => {
        return getAllPurchases()
        .then(purchases => {
            console.log(purchases, 'this is in actions index')
            return dispatch(setPurchases(purchases))
        })
    }
}

export const addNewPurchase = (purchase) => {
    console.log(purchase, 'this is in the actions number 1')
    return dispatch => {
        return addPurchase(purchase)
        .then(item => {
            console.log(item, 'this is the actios number 2')
            return dispatch(addNewPurchaseToStore(item))
        }) 
    }
}

export const deletePurchased = (deleteId) => {
    return dispatch => {
        deletePurchase(deleteId)
        .then((item) => {
            dispatch(removePurchase(deleteId))
        })
    }
}