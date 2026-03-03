import { useState } from "react"
import { Link, useNavigate } from "react-router-dom" 


function Login(){
   
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    })
    const [inputserror, setInputsError] = useState({
        emailerror:false,
        passworderror:false,
    })

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

        if(inputs.email.trim() !== "" && inputs.password.trim() !== ""){
            navigate("/projectpage")
        }
    }
    
    return(
        <div className="login-page">
            <div className="login-card">
                <div className="navbar1">
                    <p id="title1">Welcome back</p>
                    <p id="title2">Sign in to your ccount</p>
                </div>
                <form className="info" onSubmit={handleSubmit}>
                    <p id="words">Email</p>
                    <input  className="inputs" type="Email" placeholder="Enter your email" onChange={changeEmail} 
                    style={{ borderColor: inputserror.emailerror ? 'red' : '' }}></input>
                    {inputserror.emailerror && <p style={{color: 'red', fontSize:'9px'}}>Please enter your email!</p>}
                    <p id="words">Password</p>
                    <input  className="inputs" type='password' placeholder="Enter your password" onChange={changePassword} 
                    style={{ borderColor: inputserror.passworderror ? 'red' : '' }}></input>
                    {inputserror.passworderror && <p style={{color: 'red', fontSize:'9px' }}>Please enter your password!</p>}
                    <button className="button">Sign in</button> 
                </form>
                <p className="footer-text">Don't have an account? <Link to="/Signin" className="link"  >Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login