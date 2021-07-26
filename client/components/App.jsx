import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'

//the todo and Thomes has good examples of components on github


function App (props) {
//   useEffect(() => {
//     props.dispatch(fetchFruits())
//   }, [])

  return (
    <h1>hello wrold</h1>
    // <>
    //   <div className='app'>
    //     <h1>Fullstack Boilerplate - with Fruits!</h1>
    //     <ul>
    //       {props.fruits.map(fruit => (
    //         <li key={fruit}>{fruit}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//     fruits: globalState.fruits
//   }
// }

export default connect()(App)