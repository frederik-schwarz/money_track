import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
//import {addNewPurchase} from '../actions'



function deletePurchase(props) {
    function handleDeleteClick(id) {
        props.dispatch(deletePurchased(id))
    }

    return (
        <>
        <button onCLick={() => handleDeleteClick(props.purchased.id)}>Delete</button>
        </>
    )
}

export default connect()(deletePurchase)