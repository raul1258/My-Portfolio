import React from 'react'
import "./style.css"

function Intro() {
  return (
    <div className='intro'>
        < div className='first-part'>
            <div>
                <h1 className="headingIntro"><span></span><strong style={{color:"var(--blue)"}}> .</strong></h1>
            </div>
            <div className="hiddenText">
                        <p  style={{color:"#000",opacity:0.5 }}>Hey There! I am Rahul Jaiswal - A Junior FrontEnd Developer. Welcome to my Professional Portfolio.</p>
                        <div style={{display:"flex"}}>
                            <a href="/" onClick={(e) => {
                const menu = document.getElementById('socials');
                e.preventDefault();
                menu &&
                 menu.scrollIntoView({behavior: 'smooth', block: 'start'});
                // if (window.location.href!='http://localhost:3000/') {
                //   location.href = '/#about';
                // }
              }}><button className="btn">Connect Now</button></a>
                            <a href="/" onClick={(e) => {
                const menu = document.getElementById('projects');
                e.preventDefault();
                menu &&
                 menu.scrollIntoView({behavior: 'smooth', block: 'start'});
                // if (window.location.href!='http://localhost:3000/') {
                //   location.href = '/#about';
                // }
              }}><button className="btn">My Projects</button></a>
              </div>
              </div>
        
        

                



        </div>
    </div>
  )
}

export default Intro
