import { Routes, Route } from 'react-router-dom' 
import Login from './login-components/login/Login'
import Sigin from './login-components/sigin/sigin'
import ProjectPage from './project-page/ProjectPage'
import TaskPage from './task-page/TaskPage'
import './App.css'
import { useState } from 'react'

function App() {

    const [tasks, settasks] = useState([])
    const [projects, setprojects] = useState()
    const [username, setusername] = useState("") 
        
    
    return(
        <>
        <Routes>
            <Route path='/' element={ <Login />} />

            <Route path='/signin' element={<Sigin setusername={setusername} />}/>
                
            <Route path='/Login' element={ <Login/>} />

            <Route path='/projectpage' element={
                <ProjectPage 
                tasks={tasks} 
                projects={projects} 
                setprojects={setprojects} 
                username={username} />}/>

            <Route path='/taskpage' element={
                <TaskPage 
                tasks={tasks} 
                settasks={settasks}/>} />
        </Routes>
        </>
        
    )
    
}

export default App
