import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const SignIn =()=>{
    const {state,dispatch} = useContext(UserContext) 
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
        }
        else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            M.toast({html:"Signed in Successfully",classes:"#2e7d32 green darken-3"})
            history.push('/')
        }
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
            <h2>Mitro'n</h2>
            <input 
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #536dfe indigo accent-2"
            onClick={()=>PostData()}
            >
                Login
            </button>
            <h5>
                <Link to="/Signup">Create a new account</Link>
            </h5>
            
        </div>
       </div>
    )
}

export default SignIn