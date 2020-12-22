import React from 'react'
import { Link } from 'react-router-dom';
import './News.css';
import logo from '../assets/KnowCOVIDlogo.png'
import profileIcon from '../assets/profileIcon.png'
import voxlogo from '../assets/voxlogo.png'
import BBCNews from '../assets/BBCNewslogo.png'
import ScienceNews from '../assets/ScienceNewslogo.png'
import BuzzFeedNews from '../assets/BuzzFeedNewslogo.png'
import TheGuardian from '../assets/TheGuardianlogo.png'
import NBCnews from '../assets/NBCNewslogo.png'
import APnews from '../assets/APNewslogo.png'
import NPRnews from '../assets/nprNewslogo.png'
import weeklynews from '../assets/Websites-of-the-Week/results.txt'
import fire from '../fire';
// js code to read from the result.txt file
var weeklylist;
var key = [];


var linkRef = fire.database().ref('Link');;

linkRef.once("value")
  .then(function(snapshot) {
    var a = snapshot.exists();  // true
    console.log(a);
    if(a){
       linkRef.on('value',getDatadb);
    }
  });



function getDatadb(data){
    var link = data.val();
    
    key = Object.keys(link);
    
    
}
console.log(key);
const storeLink0 = () =>{
    
    linkRef.push(weeklylist[0])
}
const storeLink1 = () =>{
  
    linkRef.push(weeklylist[1])
}
const storeLink2 = () =>{
  
    linkRef.push(weeklylist[2])
}
const storeLink3 = () =>{
  
    linkRef.push(weeklylist[3])
}
const storeLink4 = () =>{
  
    linkRef.push(weeklylist[4])
}
const storeLink5 = () =>{
  
    linkRef.push(weeklylist[5])
}
const storeLink6 = () =>{
  
    linkRef.push(weeklylist[6])
}
const storeLink7 = () =>{
  
    linkRef.push(weeklylist[7])
}
function removeData(a){
    let userRef = fire.database().ref('Link/');
    
   // linkRef.child(key[a]).remove();
    //fire.database().ref('Link/'+key[a]).remove();
}

async function getData(){
    var response = await fetch(weeklynews)
    .then(r => r.text());
    return response;
};


  

getData().then(text => {
    //console.log('text decoded:', text);
    weeklylist = text.toString().split("\n");
});

const News = ({handleLogout}) =>{
    return(
        <section className="main">
            <nav>
            	{/*<img src={ logo } width="150" height="150" alt="My_Logo"/>*/}
                <Link to="/"><img src={ logo } width="150" height="150" alt="My_Logo"/></Link>
                {/* <button><h1>NEWS</h1></button> */}
                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <Link to="/userprofile"><button className="dropdown-button" >User Profile</button></Link>
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div class="heading">
                <h1>
                    News Page
                </h1>
            </div>
            <div class="list-of-news">
            <ol>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ voxlogo } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[0]} target="_blank">
                                {weeklylist[0]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink0} >Subscribed</button>
                           {/* <button class = "Button_Link"  onClick = {removeData(0)}>Unsubscribed</button>*/}
                           
                            
                        </div>
                        
                    </div>

                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ BBCNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[1]} target="_blank">
                                {weeklylist[1]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink1} >Subscribed</button>
                            
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ ScienceNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[2]} target="_blank">
                                {weeklylist[2]}
                            </a>
                            <br/>
                            <button className = "Button_Link" onClick = {storeLink2} >Subscribed</button>
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ BuzzFeedNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[3]} target="_blank">
                                {weeklylist[3]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink3} >Subscribed</button>
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ TheGuardian } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[4]} target="_blank">
                                {weeklylist[4]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink4} >Subscribed</button>
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ NBCnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[5]} target="_blank">
                                {weeklylist[5]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink5} >Subscribed</button>
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ APnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[6]} target="_blank">
                                {weeklylist[6]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink6} >Subscribed</button>
                        </div>
                        
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ NPRnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[7]} target="_blank">
                                {weeklylist[7]}
                            </a>
                            <br/>
                            <button class = "Button_Link" onClick = {storeLink7} >Subscribed</button>
                        </div>
                        
                    </div>
                </ol>
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
            <div className = "paragraph">
                <p><strong>
                Welcome to KnowCOVID! Coronavirus (specifically, COVID-19) was first discovered in the East on December of 2019. 
                It transformed into a pandemic that affected every part of the globe in 2020. With social distancing and quarantine 
                affecting everyone's lives, it is hard to find a more relevant news topic than coronavirus. The future of how society 
                copes with this pandemic in 2021 remains uncertain. This makes it all the more important to stay up-to-date with news 
                of coronavirus from trusted sources. Stay informed and stay safe.
                -Michael Salamon, Orion Cadri, Janice Ma, Xin Chen
                </strong>
                </p>
            </div>
            <div class = "footer">
                <br/>
                <p>KnowCOVID</p>
                <p> Copyright KnowCOVID Inc 2020. All Rights Reserved.</p>
            </div>
        </section>
    );
};      
export default News;