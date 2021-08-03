import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { deletePurchased } from '../actions'



function DeletePurchase(props) {
    console.log(props, 'this is the console of Del jsx')
    function handleDeleteClick(id) {
        props.dispatch(deletePurchased(id))
    }
    
    return (
        <>
        <button onClick={() => handleDeleteClick(props.purchased.id)}>Delete</button>
        </>
    )
}

export default connect()(DeletePurchase)