import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import DeletePurchase from './DeletePurchase'

import { setAllPurchases } from '../actions/index.js'


function AllPurchases (props) {
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])

    return (
        <div className="allPurchasesContainer">
        
        
             <ul className="allPurchasesUl">
                {props.purchase.map(purchase => {
                    
                    return(
                        <li className="allPurchasesLi" key={purchase.id}>
                            {purchase.purchased}
                            <DeletePurchase purchased={purchase}/>
                        </li>
                        
                    )
                })}
            </ul> 
            
            
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(AllPurchases)