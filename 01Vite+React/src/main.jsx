import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Eg from './eg.jsx'
/* Funtion in main.jsx directly*/
function Yo(){
  return(
    <div>
    <h1>YO YO</h1>
  </div>
  )
}
/*
React inbuilt Render do not identifies this format:
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit Google'
}
*/

//React inbuilt Render only identifies this format:
const globalvariable = "yoyo"
const reactElement = React.createElement(
  'a',//tag :h1 , a , etc
  { href: 'https://google.com', target: "_blank" },//reference
  'Visit Google',//text
  globalvariable//variable injection at last
);


const AnotherElement = (
  <a href="https:/google.com" target='_blank'>Visit Google</a>
)

/* 
<> Render eg:1
  <App />
  <Eg />
  <h4>Fragments</h4>
  <Yo/>
</> */

/* Render eg:2
 AnotherElement */

/* Render eg:3 
 reactElement
*/
 ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
    
  
)
