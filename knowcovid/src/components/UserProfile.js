import React from 'react'
import { Link } from 'react-router-dom';
import './News.css';
import logo from '../assets/KnowCOVIDlogo.png'
import profileIcon from '../assets/profileIcon.png'
import fire from '../fire';


var links = [];

var linkRef =fire.database().ref('Link');



    linkRef.on('value',getData);
 




function getData(data){
    
    var link = data.val();
    
    var key = Object.keys(link);
    
    for (var i =0; i < key.length; i++){
        var k = key[i];
        links[i] = link[k];
         

    }
    
    
}
console.log(links)

const UserProfile = ({handleLogout}) =>{
    return(
        
        <section className="main">
            <nav>
                
                <Link to="/"><img src={ logo } width="150" height="150" alt="My_Logo"/></Link>
             
                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <Link to="/news"><button className="dropdown-button">News</button></Link> 
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div className="userprofile">
                <div className="subBox">
                    <h1 className="userprofile1">User Profile</h1>
                    <h3 className="userprofile2">Email: {fire.auth().currentUser.email}</h3>
                    <h3 className="userprofile2">Created Date: {fire.auth().currentUser.metadata.creationTime}</h3>
                    <h3 className="userprofile2">Last Login Date: {fire.auth().currentUser.metadata.lastSignInTime}</h3>
                </div>
                <h1 class = "heading">Subscribed</h1>
                
                <div className = "subBox">
                
                    {
                        links.map( l => (
                            <a className = "newLink" target="_blank" href= {l}>{l} <br/></a> 
                            
                        ))
                        
                    }
                
                </div>
                
            </div>
                   
            <div class="heading">
                <div class="case-stats">
                        <b> Daily COVID Statistics Updates provided by NBC News.</b>
                        <br/>
                        <a href="https://www.nbcnews.com/health/health-news/coronavirus-u-s-map-where-virus-has-been-confirmed-across-n1124546?icid=cv_marquee"
                        target="_blank">
                            Click here to view
                        </a>
                </div>
                <br/>
            </div>

            <div class = "footer">
                <br/>
                <p>KnowCOVID</p>
                <p> Copyright KnowCOVID Inc 2020. All Rights Reserved.</p>
            </div>
        </section>
    );
};      
export default UserProfile;