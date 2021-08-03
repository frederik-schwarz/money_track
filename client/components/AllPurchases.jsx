import React, {useEffect} from 'react'
import { connect } from 'react-redux'


import { setAllPurchases } from '../actions/index.js'


function AllPurchases (props) {
    console.log(props)
    useEffect(() => {
        props.dispatch(setAllPurchases()) //imported from actions
    }, [])

    return (
        <>
        
             <ul>
             {console.log(props.purchase, 'this is the console log of jsx')}
                {props.purchase.map(purchase => {
                    
                    return(
                        <li>
                            {purchase.purchased}
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