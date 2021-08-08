import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addNewPurchase} from '../actions'


function AddPurchase(props) {
    const[formData, changeFormData] = useState({purchased: '', price: 0, importance: 0})

    function submitHandle(e) {
        e.preventDefault()
        props.dispatch(addNewPurchase(formData))
        changeFormData({purchased: '', price: 0, importance: 0})
    }
    function changeHandler(e) {
        changeFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form className='formContainer' onSubmit={(event) => submitHandle(event)}>
                
                <div className='formDivs'>
                <div className='formDivsChild'>
                <label className='labelForAdd' htmlFor='purchased'>Good purchased: </label>
                <input className='inputForAdd' onChange={(event) => changeHandler(event)} name='purchased' htmlFor='purchased' type='text' id='puchased' value={formData.purchased}></input>
                </div>
                </div>
                <div className='formDivs'>
                <div className='formDivsChild'>
                <label className='labelForAdd' htmlFor='price'>Price: </label>
                <input className='inputForAdd' onChange={(event) => changeHandler(event)} name='price' htmlFor='price' id='price' type='number' value={formData.price}></input>
                </div>
                </div>
                <div className='formDivs'>
                <div className='formDivsChild'>
                <label className='inputForAdd' className='labelForAdd' htmlFor='importance'>Importance of purchase out of 10: </label>
                <input className='inputForAdd' onChange={(event) => changeHandler(event)} name='importance' htmlFor='importance' id='importance' type='number' value={formData.importance}></input>
                </div>
                </div>
                
                <input className='submitForAdd' type="submit" value="Submit"/>
            </form>
        </>
    )
}
const mapStateToProps = (globalState) => {
    return {
        purchase: globalState.purchasesReducer
    }
}

export default connect(mapStateToProps)(AddPurchase)