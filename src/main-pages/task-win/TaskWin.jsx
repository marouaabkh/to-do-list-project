import { useEffect, useRef, useState } from "react"
import reject from "./reject.png"
function TaskWin({addtask, setaddtask, tasks, settasks, edittask, setedittask}){

    const projectinput = useRef(null)
    const testinput = useRef(null)
    const dateinput = useRef(null)
    const taskpriorityinput = useRef(null)
    const projectpriorityinput = useRef(null)
    const [sametask, setsametask] = useState(false)
    

    useEffect(()=>{
        if(edittask){
            projectinput.current.value = edittask.projectname
            testinput.current.value = edittask.testname
            dateinput.current.value = edittask.date
            taskpriorityinput.current.value = edittask.taskpriority
            projectpriorityinput.current.value = edittask.projectpriority
        }
    },[edittask])
    


    function AddTask(e){

        e.preventDefault()
        const projectvalue = projectinput.current.value
        const testvalue = testinput.current.value
        const datevalue = dateinput.current.value
        const taskpriorityvalue = taskpriorityinput.current.value
        const projectpriorityvalue = projectpriorityinput.current.value

        const isduplicate = tasks.some(task =>
            task.projectname.toLowerCase() === projectvalue.toLowerCase() &&
            task.testname.toLowerCase() === testvalue.toLowerCase() 
            
        )

        if(isduplicate){
            setsametask(true)
            return
        }

        if(projectvalue && testvalue && datevalue && taskpriorityvalue && projectpriorityvalue){
            if(edittask){
                const updatetask = tasks.map(task =>
                    task.id === edittask.id ?{
                        ...task,
                        projectname : projectvalue,
                        testname : testvalue,
                        date : datevalue,
                        taskpriority : taskpriorityvalue,
                        projectpriority : projectpriorityvalue,
                        importent : importentvalue
                    } : task
                )
                settasks(updatetask)
                setedittask(null)
            }else{
                const newtask = {
                id: Date.now(),
                projectname : projectvalue,
                testname : testvalue,
                date : datevalue,
                completed : false,
                taskpriority : taskpriorityvalue,
                projectpriority : projectpriorityvalue,
                importent : false,
            }
            settasks([...tasks, newtask])
            }
            
            projectinput.current.value = ""
            testinput.current.value = ""
            dateinput.current.value = ""
            taskpriorityinput.current.value = "Low"
            projectpriorityinput.current.value = "Low"
            setsametask(false)
            setaddtask(false)
        }
        
    }

    function handletestname(){
        if(sametask){
            setsametask(false)
        }
    }

    

    
    
    return(
        <>
            {addtask  ? (
            <div className="model-overlay" >
                <div className="task-card">
                    <div className="taskheader">
                        <h2 style={{color:"black"}}>New Task</h2>
                        <img className="reject" src={reject} onClick={()=>{
                            setaddtask(false) 
                            setedittask(null)}}
                        />
                    </div>
                    <form onSubmit={AddTask}>
                        <p className="signin-words">Project Name</p>
                        <input ref={projectinput} className="task-inputs" placeholder="Project name"  ></input>
                        <p className="signin-words">Project Priority</p>
                        <select ref={projectpriorityinput} className="task-inputs">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <p className="signin-words">Task Name</p>
                        <input ref={testinput} className="task-inputs" type="text" placeholder="Task name" onChange={handletestname} style={{ borderColor: sametask ? 'red' : '' }} ></input>
                        {sametask && <p style={{color: 'red', fontSize:'9px'}}>You already have this task!</p>}
                        <p className="signin-words">Task Priority</p>
                        <select ref={taskpriorityinput} className="task-inputs">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <p className="signin-words">Due Date</p>
                        <input ref={dateinput} className="task-inputs" type="date" ></input>
                        <button className="addtask-btn">
                            {edittask? "Save changes" : "Add Task"}
                        </button>
                    </form>
                </div>
            </div>
            ) : null }    
        </>
    )
}

export default TaskWin