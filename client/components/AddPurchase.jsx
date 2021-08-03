import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addNewPurchase} from '../actions'


function AddPurchase(props) {
    const[formData, changeFormData] = useState({purchased: '', price: 0, importance: 0})

    function submitHandle(e) {
        e.preventDefault()
        props.dispatch(addNewPurchase(formData))
        changeFormData({purchased: '', price: 0, importance: 0})
    }
    function changeHandler(e) {
        changeFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form onSubmit={(event) => submitHandle(event)}>
                <label for='purchased'>Good purchased: </label>
                <input onChange={(event) => changeHandler(event)} name='purchased' for='purchased' type='text' id='puchased' value={formData.purchased}></input>
                <label for='price'>Price: </label>
                <input onChange={(event) => changeHandler(event)} name='price' for='price' id='price' type='number' value={formData.price}></input>
                <label for='importance'>Importance of purchase out of 10: </label>
                <input onChange={(event) => changeHandler(event)} name='importance' for='importance' id='importance' type='number' value={formData.importance}></input>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
}

export default connect(mapStateToProps)(AddPurchase)