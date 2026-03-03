import folder from "./folder.png"
import todolist from "./todolist.png"
import notice from "./notice.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


function LeftSide(){
    
    const navigate = useNavigate()
    function handleClick(){
        navigate("/Login")
    }

    function switchpage1(){
        navigate("/projectpage")
    }

    function switchpage2(){
        navigate("/taskpage")
    }

    return(
        
        <div className="left-side">
            <div className="images">
                <div className="imagehover" onClick={switchpage1} ><img className="image" src={folder} alt="folder"/></div>
                <div className="imagehover" onClick={switchpage2}><img className="image" src={todolist} alt="to-do-list" /></div>
                <div className="imagehover" ><img className="image" src={notice} alt="notice" /> </div>
            </div>
            <button className="logout" onClick={handleClick}>Logout</button>
        </div>
        
        
    )
}

export default LeftSide