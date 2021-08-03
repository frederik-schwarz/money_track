import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AllPurchases from './AllPurchases'
import AddPurchase from './AddPurchase'




//the todo and Thomes has good examples of components on github


function App (props) {

  return (
    <>
    <h1>hello wrold</h1>
    <AllPurchases />
    <AddPurchase />
    </>
  )
}

export default connect()(App)