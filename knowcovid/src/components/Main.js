import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/KnowCOVIDlogo.png'
import landingimg from '../assets/covid_info.png'
import profileIcon from '../assets/profileIcon.png'




const Main = ({handleLogout, user, email}) =>{
    
    
  
    return(
       
        <div className="main">
 
            <nav>

                <Link to="/"><img src={ logo } width="150" height="150" alt="My_Logo"/></Link>
            	{/* <img src={ logo } width="150" height="150" alt="My_Logo"/> */}
                {/* <button><h1>NEWS</h1></button> */}

                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <Link to="/userprofile"><button className="dropdown-button" >User Profile</button></Link>
                        <Link to="/news"><button className="dropdown-button">News</button></Link> 
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>

                        
                    </div>
                </div>
            </nav>



            <div>
                <h1 class = "heading">
                Welcome
                <p>Get the Most Recent News!</p>
                </h1>
            </div>
            <div>
                <img class = "landing-img" src = {landingimg}/>
                <Link to="/news"><button>NEWS</button></Link> 
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

            
        </div>
        
    );
    
};      
export default Main;

















