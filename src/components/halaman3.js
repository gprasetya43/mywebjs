import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";


class Halaman3 extends Component {
     render(){
          return(
               <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                         <Cell col={12}>
                              <br></br> <br></br><br></br><br></br><br></br>
                         
                              <div className = "bannerkontak-text">
                                   <h1 className="kontak"> Find me on:</h1>
                                   <hr/>
                                   <p> Click icon below </p>
                                   <br></br>
                                   <div className = "social-links">
                                    
                                        <a href = "https://twitter.com/Gunawan97933127" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-twitter-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://api.whatsapp.com/send?phone=6282134306894" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-whatsapp" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.instagram.com/gunawan_prasetya10" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-instagram" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://github.com/gprasetya43" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-github-square" aria-hidden="true"/>
                                        </a>
                                        
                                        <a href = "https://www.youtube.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-youtube-square" aria-hidden="true"/>
                                        </a>
                                   </div> <br></br>
                                   <h5>Feel free to Contact me!</h5>
                              </div>
                         </Cell>
                    </Grid> 
               </div>
          )
     }
}

export default Halaman3;