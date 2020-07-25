import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    //console.log(typeof(user),user)
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')    // if user token present then this link
    }else{
      history.push('./signin')    // if user token NOT present then redirecting to this link
    }
  },[])
  return(
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path ="/Signin">
        <Signin />
      </Route>
      <Route path ="/Signup">
        <Signup />
      </Route>
      <Route path ="/Profile">
        <Profile />
      </Route>
      <Route path ="/create">
        <CreatePost />
      </Route>
   </Switch> 
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
