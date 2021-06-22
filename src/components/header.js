import React from "react";

let count = 0;

class Header extends React.Component{

     jaiClique(e) {
          count +=1;
          e.target.innerText = (`J'ai été cliqué ${count} fois `)
     }

     render(){
          return (
               <div onClick={this.jaiClique} className="header" >
                    
                    <p  >Home</p>
                    <p>Pages</p>
                    <p>A propos</p>



               </div>
          )
     }
}

export default Header;