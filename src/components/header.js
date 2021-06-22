import React from "react";


class Header extends React.Component{

     jaiClique() {
          alert("hello");
     }

     render(){
          return (
               <div className="header" >
                    
                    <p onClick={this.jaiClique} >Home</p>
                    <p>Pages</p>
                    <p>A propos</p>



               </div>
          )
     }
}

export default Header;