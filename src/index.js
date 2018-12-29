import React from 'react'
import ReactDom from 'react-dom'


const App = () => {
  const buttonText = { text:'click me'}
  const header = {text: 'Enter Name:'}
  return ( 
 <div>
  <label className='label' hmtlFor='name'>{header.text}</label>
  <input type='text' id='name'/ >
  <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
</div> )
}

ReactDom.render(
  <App />,
  document.querySelector('#root')

)