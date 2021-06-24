import React from "react";

let count = 0;

class Header extends React.Component{

     jaiClique(e) {

          if(e.target.className == "home"){


               count +=1;
               e.target.innerText = (`J'ai été cliqué ${count} fois `)
               console.log(e.target.element)
          }else if (e.target.className == "pages"){
               count +=1;
               e.target.innerText = (`J'ai été cliqué ${count} fois `)
               console.log(e.target.element)
              
          }else if (e.target.className == "aPropos"){
               count +=1;
               e.target.innerText = (`J'ai été cliqué ${count} fois `)
               console.log(e.target.element)
          }
     }

     render(){
          return (
               <div onClick={this.jaiClique} className="header" >
                    
                    <p className="home">Home</p>
                    <p className='pages'>Pages</p>
                    <p className="aPropos">A propos</p>



               </div>
          )
     }
}

export default Header;