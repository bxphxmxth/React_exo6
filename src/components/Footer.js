import React from "react";

class Footer extends React.Component {

     render(){
          return(
               <footer>
                        
                         <button type="button" className="btn btn-success rounded-0">Bouton Bootstrap</button> 

                         <div class="card foot">
                          <div class="card-header">
                        Footer
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Contact</a>
                    </div>
                    </div>


               </footer>
          )
     }
}

export default Footer;