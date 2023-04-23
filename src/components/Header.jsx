import React from 'react'
import { useState } from "react";
import {IoMdArrowDropdownCircle} from "react-icons/io"
import {IoMdArrowDropupCircle} from "react-icons/io"

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-block", backgroundColor: "darkblue", width: "100%" }}>
      <div style={{display:'flex'}}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{ backgroundColor: "darkblue", color: "white", padding: "16px", border: "none", cursor: "pointer",left:0, fontSize:"18px" }}
      >
        DS031221 {showMenu ?  <IoMdArrowDropupCircle size={20}/>: <IoMdArrowDropdownCircle size={20}/>} 
      </button>
      <p style={{color:'white', fontWeight:'bold', fontSize:'20px'}}> Data Scientist Program</p>
      </div>
      
      {showMenu ? (
        
        <div
          style={{
            display: "block",
            position: "absolute",
            backgroundColor: "darkblue",
            minWidth: "100%",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1
          }}
        >
          <p style={{marginLeft:"10px", fontSize:'15px', color:'white'}}>Select Program</p>
          <div style={{display: "flex",
            position: "absolute",
            backgroundColor: "darkblue",
            minWidth: "100%",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1}}>
                <a href="#" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>
            ECRD
          </a>
          <a href="#" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>
            FSR222222
          </a>
          <a href="#" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>
            DS261121
          </a>
          <a href="#" style={{ color: "black", padding: "12px 16px", textDecoration: "none", display: "block", backgroundColor:'white' , borderRadius:'3px'}}>
            DS021221
          </a>
          </div>
          
        </div>
      ) : null}
    </div>
  )
}

export default Header