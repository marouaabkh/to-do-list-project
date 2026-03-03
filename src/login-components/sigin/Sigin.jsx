import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Sigin({setusername}){
    
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email:"",
        password:"",
    })
    const [inputserror, setInputsError] = useState({
        emailerror:false,
        passworderror:false,
    })
        
    function changefirstname(e){
        if(e.target.value){
            setInputs({...inputs,firstname:e.target.value})
        }else{
            setInputs({...inputs,firstname:""})
        }
    }

    function changelastname(e){
    if(e.target.value){
        setInputs({...inputs, lastname: e.target.value})
    } else {
        setInputs({...inputs, lastname: ""})
    }
}

    function changeEmail(e){
       if(e.target.value){
            setInputs({...inputs,email:e.target.value})
            setInputsError({...inputserror,emailerror:false})
        }else{
            setInputs({...inputs,email:""})
            setInputsError({...inputserror,emailerror:true})
        }
    }
        
    function changePassword(e){
        if(e.target.value){
            setInputs({...inputs,password:e.target.value})
            setInputsError({...inputserror,passworderror:false})
        }else{
            setInputs({...inputs,password:""})
            setInputsError({...inputserror,passworderror:true})
        }
    }
        
    function handleSubmit(e){
        e.preventDefault()
        const errobject={
            emailerror:false,
            passworderror:false,
        }
        if(inputs.email===""){
            errobject.emailerror = true
        }
        if(inputs.password===""){
            errobject.passworderror = true
        }
        setInputsError(errobject)

        if(inputs.email.trim() !== "" && inputs.password.trim() !== "" && inputs.firstname.trim() !=="" && inputs.lastname.trim() !=="" ){
            setusername(inputs.firstname)
            navigate("/projectpage")
        }
    }
    

    return(
        <div className="login-page">
            <div className="signin-card">
                <p className="signin-text">Create an account</p>
                <div className="name">
                    <div>
                        <p id="words">First Name</p>
                        <input className="sigin-inputs" type="text"  placeholder="First name" onChange={changefirstname} />
                    </div>
                    <div>
                        <p id="words">Last Name</p>
                        <input className="sigin-inputs" type="text" placeholder="Last name" onChange={changelastname}/>
                    </div>
                </div>
                <form className="info" onSubmit={handleSubmit}>
                    <p className="signin-words">Username</p>
                    <input className="inputs" type="text" placeholder="Choose a username"></input>
                    <p id="words">Email</p>
                    <input className="inputs" type="email" placeholder="Enter your email" onChange={changeEmail}
                    style={{ borderColor: inputserror.emailerror ? 'red' : '' }}></input>
                    {inputserror.emailerror && <p style={{color: 'red', fontSize:'9px'}}>Please enter your email!</p>}
                    <p id="words">Password</p>
                    <input className="inputs" type="password" placeholder="Enter your password" onChange={changePassword}
                    style={{ borderColor: inputserror.passworderror ? 'red' : '' }}></input>
                    {inputserror.passworderror && <p style={{color: 'red', fontSize:'9px'}}>Please enter your password!</p>}
                    <button className="button" style={{marginTop: (inputserror.emailerror || inputserror.passworderror)? '10px' : ''}}>Sign up</button>
                </form>
                
                <p className="signin-footer-text">Already have an account? <Link to='/Login'className="link">Sign in</Link></p>
            </div>
        </div>
    )
}

export default Sigin 