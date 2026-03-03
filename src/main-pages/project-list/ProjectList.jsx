
function ProjectList({ tasks}){

    const groupedproject = tasks.reduce((groups, task)=>{
        const project = task.projectname ;
        if(!groups[project]){
            groups[project] = []
        }
        groups[project].push(task)
        return groups
    }, {})
    
    return(
        <>
        {tasks.length > 0 ?(
            <div className="projects">
                {Object.keys(groupedproject).map((projectname)=>{
                    const priority = groupedproject[projectname][0].projectpriority?.toLowerCase()
                    const projecttask = groupedproject[projectname]
                    const complettask = projecttask.filter(task => task.completed).length
                    const percentage = projecttask.length >0 ? (complettask / projecttask.length)*100 : 0
                    return(
                        <div key={projectname} className={`project-item ${priority}`}>
                            <h3>{projectname}</h3>
                            {percentage < 100 ? <p>Status: In progress </p> : <p>Status: Completed</p>}
                            
                            <p>Progress: </p>
                            <div className="progress-bar">
                                <div 
                                className="progress-fill" 
                                style={{ width: `${percentage}%` }}>
                                </div>
                            </div>
                        </div>
                   )
                })}
            </div>
        ) : null}
    </>
    )
}

export default ProjectList