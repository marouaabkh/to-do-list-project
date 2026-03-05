import LeftSide from "../main-pages/left-side/LeftSide"
import Header from "../main-pages/header/Header"
import { useState } from "react"
import ProjectList from "../main-pages/project-list/ProjectList"

function ProjectPage({tasks, settasks, projects, setprojects, username}) {

    const [completed, setcompleted] = useState("")
    const [total, settotal] = useState("")

    return(
        <>
        <div className="layot">
            <LeftSide/>
            <div>
                <Header title="Projects" showbutton={false} />
                <div>
                    <div className="username">
                        <h2>Hi {username}</h2>
                        <h5>Welcome back to the work space, we miss you!</h5>
                    </div>
                    <ProjectList 
                    tasks={tasks}
                    settasks={settasks} />
                    
               </div>
            </div>
        </div>
        </>
    )
}

export default ProjectPage