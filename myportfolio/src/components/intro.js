import React from 'react'
import pic1 from "../assets/img1.jpg"
import pic2 from "../assets/pp.jpeg"
import pic3 from "../assets/iphoneAnonimo.png"


function intro() {
  return (
    <div className='intro'>
        <div className='intro-wrapper' style={{padding:20 , width:"50%"}}>
          <div style={{fontSize:"150%"}}>
            <h1 className="headingIntro"><span></span><strong style={{color:"var(--blue)"}}> .</strong></h1>
            </div>
            <div className="hiddenText">
                            <p  style={{color:"#000",opacity:0.5 }}>Hey There! I am Rahul Jaiswal - A Self Taught Web Developer. Welcome to my Professional Portfolio.</p>
            </div>
        <div className='btn-set'>
          <button className="btn">Connect Now</button>
          <button className="btn2">My Projects</button>
        </div>  

          <div className="Card" style={{display:"flex",flexDirection:"column",marginTop:30,border:"2px solid lightgrey",borderRadius:10}}> 
                       
                        <div style={{display:"flex", alignItems: 'center',padding:20}}>
                            <img src={pic2} className="dp"/>
                            <div className="idText" style={{padding:20 , fontSize:"80%"}}>
                                <h1>Rahul Jaiswal</h1>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>FrontEnd Developer</h3>
                            </div>
                        </div>
                    </div>
            </div>   
        
          <div className='imageIntro'>
            <img src={pic1} className="pic1"></img>
            
          </div>
    </div>
  )
}

export default intro
