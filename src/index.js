import React from 'react'
import ReactDom from 'react-dom'

function getButtonText() {
  return "Click me"
}

const App = () => {
  return ( 
 <div>
  <label className='label' for='name'>Enter Name:</label>
  <input type='text' id='name'/ >
  <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText}</button>
</div> )
}

ReactDom.render(
  <App />,
  document.querySelector('#root')

)