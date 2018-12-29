import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
 return ( 
 <div>
  <label className='label' for='name'>Enter Name:</label>
  <input type='text' id='name'/ >
  <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
</div> )
}

ReactDom.render(
  <App />,
  document.querySelector('#root')

)