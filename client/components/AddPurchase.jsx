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
                <label htmlFor='purchased'>Good purchased: </label>
                <input onChange={(event) => changeHandler(event)} name='purchased' htmlFor='purchased' type='text' id='puchased' value={formData.purchased}></input>
                <label htmlFor='price'>Price: </label>
                <input onChange={(event) => changeHandler(event)} name='price' htmlFor='price' id='price' type='number' value={formData.price}></input>
                <label htmlFor='importance'>Importance of purchase out of 10: </label>
                <input onChange={(event) => changeHandler(event)} name='importance' htmlFor='importance' id='importance' type='number' value={formData.importance}></input>
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