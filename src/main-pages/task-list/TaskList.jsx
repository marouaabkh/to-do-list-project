import deleteimg from "./deleteimg.png"
import edit from "./edit.png"


function TaskList({ tasks, settasks, setedittask, setaddtask}){

    const groupedtasks = tasks.reduce((groups, task)=>{
        const project = task.projectname ;
        if(!groups[project]){
            groups[project] = []
        }
        groups[project].push(task)
        return groups
    }, {})

    
    function ComletedTask(id){
        const comletedtask = tasks.map(task =>
            task.id === id?
                {...task, completed: !task.completed}: task
        )
        settasks(comletedtask)
    }

    function Edittask(task){
        setedittask(task)
        setaddtask(true)
    }

    function Deletetask(id){
        const filtertasks = tasks.filter( task => task.id !== id)
        settasks(filtertasks)
    }
    

    return(
        <div className="tasks">
            { Object.keys(groupedtasks).map((projectname) =>(
                <div key={projectname} >
                    <div className="task-header">
                        <p className="project-title">{projectname}</p>
                        <div className="tasknum">{groupedtasks[projectname].length} task</div>
                    </div>
                    <div className="project-tasks">
                        {groupedtasks[projectname].map((task,index)=>(
                            <div className="task-item" key={task.id} style={{borderBottom : index !== groupedtasks[projectname].length -1 ? "1px solid #e5e5e7" : ""}}>
                                <div className="detial">
                                    <div className="checkbox">
                                        <input type="checkbox" checked={task.completed || false} onChange={()=>ComletedTask(task.id)} />
                                    </div>
                                    <div className="n">
                                        <p className={task.completed ? "completed" :"task-name"}>{task.testname}</p>
                                        <div className="more-detial">
                                            <div className={`priority ${task.taskpriority?.toLowerCase()}`}></div>
                                            <p className="task-date">{task.date}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="editnddelete">
                                    <img className="image" src={edit} onClick={() => Edittask(task)}  />
                                    <img className="image" src={deleteimg} onClick={() => Deletetask(task.id)} />
                                </div>
                                    
                                
                                
                            </div>
                        ))}
                        
                    </div>
                </div>

                
            ))}
            
                    
        </div>
    )
}

export default TaskList