import React, { useState } from "react";
import {FaHome} from 'react-icons/fa'
import {GiBookshelf} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'

function Bar() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "10%", backgroundColor: "darkblue", color: "white", display: "flex", flexDirection: "column" }}>
        <button
          style={{
            backgroundColor: activeTab === 1 ? "lightblue" : "darkblue",
            color: "white",
            padding: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            textAlign: "center"
          }}
          onClick={() => setActiveTab(1)}
        >
          <FaHome size={40}/><br />
          Home
        </button>
        <button
          style={{
            backgroundColor: activeTab === 2 ? "lightblue" : "darkblue",
            color: "white",
            padding: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            textAlign: "center"
          }}
          onClick={() => setActiveTab(2)}
        >
          <GiBookshelf size={40}/> <br />
          Modules
        </button>
        <button
          style={{
            backgroundColor: activeTab === 3 ?"lightblue" : "darkblue",
            color: "white",
            padding: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            textAlign: "center"
            
          }}
          onClick={() => setActiveTab(3)}
        >
          <FaChalkboardTeacher size={40}/> <br />
          Instructor
        </button>
      </div>
      <div style={{ width: "95%", backgroundColor: "white", padding: "16px" }}>
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default Bar;