import React, { Component } from 'react'
import './Footer.css'


class FirstFooter extends Component{
    render(){
        return(
            <div>
                
                    <footer className="firstfooter  py-3">                   
                        
                    <div className="container">
                            <div className="row">
                                 <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12 p-3">
                                            <div className="row">
                                                <div className="col-md-2">
                                                <i className="fas fa-envelope"></i>
                                                </div>

                                                <div className="col-md-10">
                                                <p className="text">info@afrikgh.net</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="col-md-12 p-3">
                                            <div className="row">
                                                <div className="col-md-2">
                                                <i className="fas fa-location-arrow"></i>
                                                </div>
                                                <div className="col-md-10">
                                                <p className="text">Baakoniaba, Sunyani.</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="col-md-12 p-3">
                                        <div className="row">
                                                <div className="col-md-2">
                                                <i className="fas fa-phone-volume"></i>
                                                </div>
                                                <div className="col-md-10">
                                                <p className="text">(+233)546000451</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                   
                                 </div>
                                 <div className="col-md-4 mt-5">
                                     <div className="row">
                                             <div className="col-md-4">
                                              <p className="text">ADVERTISE</p>
                                             </div>
                                             <div className="col-md-4">
                                             <p className="text">PRIVACY</p>
                                             </div>
                                             <div className="col-md-4">
                                             <p className="text">TERMS</p>
                                             </div>
                                     </div>
                            
                                    </div>
                                
                                  <div className="col-md-4 mt-5 ico">
                                      <div className="row">
                                          <div className="col-md-4 ">
                                          <i class="fab fa-facebook" id="facebook"></i>

                                          </div>
                                          <div className="col-md-4">
                                          <i className="fab fa-instagram" id="instagram"></i>
                                          </div>
                                          <div className="col-md-4">
                                          <i className="fab fa-twitter" id="twitter"></i>
                                          </div>
                                      </div>
                                 
                                 
                                    </div> 
                                 
                            </div>
                        </div>
                    </footer>
                    
            </div>
           
        )
    }
}

export default FirstFooter