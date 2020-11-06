import React, { Component } from 'react'
import './Footer.css'
import FirstFooter from './FirstFooter'

class Footer extends Component{
    render(){
        return(
            <div>
                <FirstFooter/>
                <hr id="hr"></hr>
                    <footer className="footer ">                   
                        <div className="container">                            
                            <div className="row">
                                 <div className="col-md-8 p-5">
                                    <span className="text">@2020 Afrik Rights Reserved</span><br></br>
                                 </div>
                                 
                            </div>
                        </div>
                    </footer>
                    
            </div>
           
        )
    }
}

export default Footer