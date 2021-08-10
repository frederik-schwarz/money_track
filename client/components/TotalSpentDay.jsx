import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { setAllPurchases } from '../actions/index.js'
import AverageImportance from './AverageImportance.jsx'



function TotalSpentDay (props) {
    let totalDaySpend = 0
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])
    return (
        <div className="totalSpentContainer">
             {props.purchase.map(purchase => {
                 totalDaySpend = totalDaySpend + purchase.price
                })}
            <p className="totalSpent">Total spent: ${totalDaySpend}</p>
            <AverageImportance />
            
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(TotalSpentDay)
