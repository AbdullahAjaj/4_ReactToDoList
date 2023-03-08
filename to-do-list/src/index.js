import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"

import Header from "./components/Header"
import Section from './components/Section'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div className='container'>
    <Header />
    <Section />
  </div>
)