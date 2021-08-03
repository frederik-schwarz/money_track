import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import DeletePurchase from './DeletePurchase'

import { setAllPurchases } from '../actions/index.js'


function AllPurchases (props) {
    useEffect(() => {
        props.dispatch(setAllPurchases()) 
    }, [])

    return (
        <>
        
        
             <ul>
                {props.purchase.map(purchase => {
                    
                    return(
                        <li>
                            {purchase.purchased}
                            <DeletePurchase purchased={purchase}/>
                        </li>
                        
                    )
                })}
            </ul> 
            
            
        </>
    )
}

const mapStateToProps = (globalState) => {
    console.log(globalState)
    return {
        purchase: globalState.purchasesReducer
    }
  }

export default connect(mapStateToProps)(AllPurchases)