import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Milky from "./Video/Time Lapse Video Of Night Sky.mp4"
import M from "materialize-css";
import Mount from "./Video/mountain.jpg"
import Cloud from "./Video/Cloud.jpg"
import css from "./Video/css3.svg"
import react from "./Video/react.svg"
import java from "./Video/javascript-4.svg"
import html from "./Video/html5.svg"
import material from "./Video/pix.png"
import travel from "./Video/travel.png"
import movie from "./Video/movie.png"
import { Link } from "react-scroll"
import {animateScroll as scroll} from "react-scroll"


function App() {
  useEffect(() => {
    M.AutoInit();
},[])
  return (
   
   <div className="blue">
     <div z-depth-5>
     <video z-depth-5 className="rim"  width="1345" height="800" src={Milky} autoPlay loop="true"> 
     </video>
     </div> 
   <div className="center-align cim" >
     <h1 id="top" className="center-align white-text" style={{}}>
       Reyan Gilani</h1>
       <h4 className="center-align white-text">Front End Engineer</h4>
       <Link style={{borderRadius:"15px"}} className="waves-effect waves-light btn-large" 
       to="cards" smooth={true} duration={1000}
       >See Projects</Link>
       </div>

<div>
       <div style={{paddingTop:"800px"}}></div>
      <div className="row">
        <h1 id="cards" className="center-align"> Portfolio </h1>


       <div className="end card blue z-depth-5" style={{padding:"20px"}}>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={movie}/>
    </div>
    <div className="card-content">
      <span className="card-title activator">
      <h4 className="center-align white-text">Movie Project </h4>
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
      <i className="material-icons right">close</i></span>
      <h4 className="center-align">Movie Project </h4>
      <p> React </p>
       <p> Movie Database API </p>
       <p> Materialize </p>
       <p> Context API </p>
       <p>
       <a href="https://5f203e8ecec89377813a2b54--mystifying-perlman-4a1ce7.netlify.app/">Project App</a>
       </p>
       <p> 
       <a href="https://github.com/ReyanAhtesham/Movie-Project">Project Code</a>
       </p>
       </div>
  </div>     



        <div className="cards"></div>
    
        <div className="end card blue z-depth-5" style={{padding:"20px"}}>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={travel}/>
    </div>
    <div className="card-content">
      <span className="card-title activator">
      <h4 className="center-align white-text">Travel Project </h4>
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
      <i className="material-icons right">close</i></span>
      <h4 className="center-align">Travel Project </h4>
      <p> React </p>
        <p> Triposo API </p>
        <p> Materialize </p>
        <p> Mapbox API </p>
        <p>
       <a href="https://5f2083b0f0119e81bd5adc72--serene-bhabha-75e628.netlify.app/">Project App</a>
       </p>
       <p> 
       <a href="https://github.com/ReyanAhtesham/Travel-Project">Project Code</a>
       </p>
       </div>
  </div>


        <div className="cards"></div>
<div className="end card blue z-depth-5" style={{padding:"20px"}}>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={material}/>
    </div>
    <div className="card-content">
      <span className="card-title activator">
      <h4 className="center-align white-text">Materialize Project </h4>
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
      <i className="material-icons right">close</i></span>
      <h4 className="center-align">Materialize Project </h4>
      <p> React </p>
        <p> Materialize </p>
        <p> React Router </p>
        <p>
       <a href="https://5f2043fdedf51ae7929e967f--hardcore-khorana-c5595f.netlify.app/">Project App</a>
       </p>
       <p> 
       <a href="https://github.com/ReyanAhtesham/Material-Project">Project Code</a>
       </p>
       </div>
  </div> 
  </div>     
      <Link style={{borderRadius:"15px"}} className="waves-effect waves-light btn-large but" 
       to="ending" smooth={true} duration={1000}
       >See Skills</Link>
       
      </div>
            <div style={{paddingTop:"200px"}}></div>
       <div id="ending"  className="parallax-container sin z-depth-5">
      <div className="parallax"><img src={Mount} className="con"/></div>
      <h1 className="center-align">Skills</h1>
      <div className="row">

        <div className="z-depth-5 col s2 offset-s blue card-panel conta"> 
        <img className="react" src={react}/>
        <h3 className="react-text">REACT</h3>
        </div>
        <div className="col s2 offset-s1 blue card-panel conta z-depth-5"> 
        <img className="html" src={html}/>
        <h3 className=""></h3>
        </div>
        <div className="col s2 offset-s2 blue card-panel conta z-depth-5"> 
        <img className="css center-align" src={css}/>
        <h3 className="center-align cs"></h3>
        </div>
        <div className="col s2 offset-s1 blue card-panel conta z-depth-5">
        <img className="java" src={java}/>
        <h3 className="center-align jav"></h3>
        </div>
      </div>
      </div>
      <Link style={{borderRadius:"15px"}} className="waves-effect waves-light btn-large bute" 
        smooth={true} duration={1000} onClick={()=> scroll.scrollToTop()}
       >Goo Back</Link>
       
{/*
      <div class="z-depth-5 parallax-container sin">
      <div class="parallax"><img src={Cloud} className="con"/></div>
    </div>
*/}
    <div style={{paddingTop:"300px"}}></div>
        

  <div style={{paddingTop:"0px"}}></div>      
    </div>
  );
}

export default App;
