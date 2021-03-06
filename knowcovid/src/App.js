import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import fire from './fire';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import News from './components/News';
import UserProfile from './components/UserProfile';



const App = () => {
  const [user, setUser] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

const clearInput = () => {
  setEmail('');
  setPassword('');
}

const clearError = () =>{
  setEmailError('');
  setPasswordError('');
}

const handleLogin= () =>{
  clearError();
  fire 
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
};
const handleSignup = () =>{
  clearError();
  fire 
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  
};
const handleLogout = () => {
  fire.auth().signOut();
  
};




const authListener = () => {
  fire.auth().onAuthStateChanged(user =>{
    if(user){
      clearInput();
      setUser(user);
    }else{
      setUser("");
    }
  });
};

useEffect(() => {
  authListener();
}, []);



return(
  
  <div className="App">
 
   
    {user ? (
      
      <Router>
        
        <Route exact path="/">
          <Main handleLogout ={handleLogout } user = {user} email = {email}  />
        </Route>
        <Switch>
        <Route exact path="/news">
          <News handleLogout ={handleLogout }/>
        </Route>
        <Route exact path="/userprofile">
          <UserProfile handleLogout ={handleLogout }/>
        </Route>
        </Switch>

      </Router>
      
    ):(
      <Router>
      <Login 
    email = {email} 
    setEmail = {setEmail} 
    password = {password}
    setPassword = {setPassword}
    handleLogin = {handleLogin}
    handleSignup = {handleSignup}
    hasAccount = {hasAccount}
    setHasAccount ={setHasAccount}
    emailError = {emailError}
    passwordError = {passwordError}
    />
        </Router>
    )}
  </div>
);
};
export default App;
