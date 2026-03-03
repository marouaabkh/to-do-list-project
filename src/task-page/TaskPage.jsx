import LeftSide from "../main-pages/left-side/LeftSide"
import Header from "../main-pages/header/Header"
import TaskWin from "../main-pages/task-win/TaskWin"
import TaskList from "../main-pages/task-list/TaskList"
import { useState } from "react"

function TaskPage({tasks,settasks, totaltask, settotaltask, complettask, setcomplettask}){
    const [addtask,setaddtask] = useState(false)
    
    const [edittask, setedittask] =useState(null)

    return(
        <>
        <div className="layot">
            <LeftSide/>
            <div >
                <Header title="Tasks" showbutton={true} setaddtask={setaddtask}/>
                <div>
                    <TaskWin 
                addtask={addtask} 
                setaddtask={setaddtask} 
                tasks={tasks} 
                settasks={settasks}
                edittask={edittask}
                setedittask={setedittask} />
                <TaskList 
                tasks={tasks}
                settasks={settasks}
                setedittask={setedittask}
                setaddtask={setaddtask}/>
                </div>
                
            </div>
        </div>
        </>
    )
} 

export default TaskPage