import React from 'react'
import pic1 from "../assets/pp.jpeg"


function AboutMe() {
  return (
    <div id="about" style={{display:"flex",alignItems:"center"}}>
    <img className="instaLoop" src={pic1} alt="Iphone Loop" width="30%"/>
    <div className="aboutMe">
        <h1>About Me <strong style={{color:"#f5576c"}}>.</strong></h1>
        <p className="para" style={{width:"70%", marginLeft:"auto",marginRight:"auto"}}>A 23 year old young entrepreneur and a student at AccioJob , who's also a learning Web Development.
        <br/>
        <br/>
        Is an Amateur Investor and keeps a keen interest in Social Media. </p>
        <br/>
        <br/>
        
         
        
        <br/> 
        <div className="Card" style={{display:"flex",flexDirection:"column",marginTop:30,border:"2px solid lightgrey",borderRadius:10}}> 
                       
                       <div style={{display:"flex", alignItems: 'center',padding:20}}>
                           {/* <img src={pic2} className="dp"/> */}
                           <div className="idText" style={{padding:20 , fontSize:"80%"}}>
                               <h1>Rahul Jaiswal</h1>
                               <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>FrontEnd Developer</h3>
                           </div>
                       </div>
                   </div>

        

    </div>
</div>

  )
}

export default AboutMe
