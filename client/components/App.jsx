import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AllPurchases from './AllPurchases'
import AddPurchase from './AddPurchase'
import TotalSpentDay from './TotalSpentDay'





//the todo and Thomes has good examples of components on github
//this is a test

function App (props) {

  return (
    <>
    <div className='titleContainer'>
    <h1 className="title">Money Tracker</h1>
    </div>
    <TotalSpentDay />
    <AllPurchases />
    <AddPurchase />
    </>
  )
}

export default connect()(App)