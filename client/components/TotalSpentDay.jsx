import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { setAllPurchases } from '../actions/index.js'



function TotalSpentDay (props) {
    let totalDaySpend = 0
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])
    return (
        <>
             {props.purchase.map(purchase => {
                 totalDaySpend = totalDaySpend + purchase.price
                })}
            <h1>{totalDaySpend}</h1>
            
        </>
    )
}


const mapStateToProps = (globalState) => {
    console.log(globalState)
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(TotalSpentDay)
