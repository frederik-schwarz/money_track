import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { setAllPurchases } from '../actions/index.js'



function TotalSpentDay (props) {
    let average = 0
    let length = props.purchase.length
    let decimalLimit = 0
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])
    return (
        <div className="totalSpentContainer">
             {props.purchase.map(purchase => {
                 average = (average + purchase.importance) / length
                 decimalLimit = parseFloat(average).toFixed(1)
                })}
            <p className="totalSpent">Average importance: {decimalLimit}/10</p>
            
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(TotalSpentDay)
