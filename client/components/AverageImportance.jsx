import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { setAllPurchases } from '../actions/index.js'



function TotalSpentDay (props) {
    let average = 0
    let length = props.purchase.length
    let decimalLimit = 0
    let imp = 0
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])

    props.purchase.map(purchase => {
        imp = imp + purchase.importance
       })
    average = imp / length
    decimalLimit = parseFloat(average).toFixed(1)

    return (
        <div className="averageContainer">
            <p className="average">Average importance: {decimalLimit}/10</p>
            
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(TotalSpentDay)
