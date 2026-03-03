import language from "./language.png"

function Header({title, showbutton, setaddtask}){
   
    function handleClick(){
        setaddtask(true)
    }
    return(
        <div className="header" >
            <h2 className="title">{title}</h2>
            <div className="header-addition">
                {showbutton && <button className="add-button" onClick={handleClick} >+add task</button>}
                <img className="languageicon" src={language} />
            </div>
            

        </div>
    )
    
}

export default Header