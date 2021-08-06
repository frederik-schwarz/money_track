import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { deletePurchased } from '../actions'



function DeletePurchase(props) {
    function handleDeleteClick(id) {
        props.dispatch(deletePurchased(id))
    }
    
    return (
        <div className="deleteButtonContainer">
        <div className="deleteButtonContainerChild">
        <button className="deleteButton" onClick={() => handleDeleteClick(props.purchased.id)}>Delete</button>
        </div>
        </div>
    )
}

export default connect()(DeletePurchase)