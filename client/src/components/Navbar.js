import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'
const Navbar = ()=>{
      const {state,dispatch} = useContext(UserContext)
      const renderList = ()=>{
        if(state){
            return[
            <li><Link to ="/Profile">Profile</Link></li>,
            <li><Link to ="/create">Create Post</Link></li>
            ]
       }else{
          return [
          <li><Link to ="/Signin">SignIn</Link></li>,
          <li><Link to ="/Signup">SignUp</Link></li>
         ]
       }
     }
    return (
        // if user state present then /=home or signin page
       <nav>
       <div className="nav-wrapper"> 
         <Link to ={state?"/":"/signin"} className="brand-logo left">Mitro'n</Link>  
          <ul id="nav-mobile" className="right">  
               {renderList()}   
           </ul>
        </div>
      </nav>
    )
}

export default Navbar