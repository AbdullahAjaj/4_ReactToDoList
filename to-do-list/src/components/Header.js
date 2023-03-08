import React from "react"
import checkIcon from "./../images/check3.png"

const Header = () =>{
  return(
    <header>
      <h1>Need to do</h1>
      <img src={checkIcon} className="checkIcon" alt="Check" />
    </header>
  )
}

export default Header