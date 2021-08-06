import { getAllPurchases } from '../apis/purchasesApi'
import { addPurchase } from '../apis/purchasesApi'
import { deletePurchase } from '../apis/purchasesApi'

export const DELETE_PURCHASE = 'DELETE_PURCHASE'
export const SET_PURCHASES = 'SET_PURCHASES'
export const ADD_PURCHASE = 'ADD_PURCHASE'

const setPurchases = (purchases) => {
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
    return dispatch => {
        return getAllPurchases()
        .then(purchases => {
            return dispatch(setPurchases(purchases))
        })
    }
}

export const addNewPurchase = (purchase) => {
    return dispatch => {
         addPurchase(purchase)
        .then(item => {
            return dispatch(addNewPurchaseToStore(item))
        }) 
        return getAllPurchases()
        .then(purchases => {
            return dispatch(setPurchases(purchases))
        })
    }
}

export const deletePurchased = (deleteId) => {
    return dispatch => {
        deletePurchase(deleteId)
        .then((item) => {
            dispatch(removePurchase(deleteId))
        })
        return getAllPurchases()
        .then(purchases => {
            return dispatch(setPurchases(purchases))
        })
    }
}