import React, { Component } from 'react'
import Yee1 from '../img/mission2.png'
import Yee2 from '../img/vision.png'
import Yee3 from '../img/core2.png'
import Yee4 from '../img/ree.jpg'
import Yee5 from '../img/dee.jpg'


// import Customer1 from '../img/customerfocus.png'
// import Socially from '../img/social.png'
// import Strong from '../img/strong1.png'


class About extends Component{

    render(){
        return(
            <div>
               <section id="about_us" className="p-5">
               <div className="container " >
                   <div className="text-center">
                        <div className="col-md-12">
                        <h2>About Us</h2>
                            <p> 
                            We want to help you grow your marketing, sales, business, & career. From our work, 
                            shows, and educational resources to our  services and live events, we want to help 
                            make your professional vision a reality no matter where you’re starting.
                            </p>
                        </div>
                   </div>
                   </div>

                

                
                        <div className="container">
                            <div className="row">
                                 <div className="col-md-4 mb-2" >
                                     
                                         
                                            <img src={Yee1} alt="deedee" id="dee"/>
                                                 <p className="yee">
                                                    <b><h4 >Mission</h4></b>
                                                    To promote exhibition in the Fashion sector responsibly with thoughts, soul and care. We provide customer
                                                     satisfaction by bringing them bold, unapologetic and beautiful designs from the African globe while 
                                                     maintaining our core values. “Its feeling inspired”.
                                                </p>

                                          
                                  </div>

                        
                                  <div className="col-md-4 mb-2" >
                                    
                                            <img src={Yee2} alt="deedee" id="dee"/>
                                            <p>
                                                <b><h4>Vision</h4></b>
                                                We are proud that FashionAfrika continues to shine the spotlight on the strength and beauty of
                                                 African fashion. Our vision is to promote local fabrics designs and crafts through exhibition 
                                                 which will be recognized worldwide. 
                                                This coupled with our passionate commitment to providing exceptional customer care.
                                            </p>
    
                                  </div>

                                  
                                  <div className="col-md-4 mb-2" >
                                          <img src={Yee3} alt="deedee" id="dee"/>
                                            <p>
                                                <b><h4>Core Values</h4></b>
                                                In a market dominated by Western ideals, we aim to be the bridge to our
                                                 customers by bringing bold, fearless and colorful 
                                                 designs from local fabrics and crafts (Africa). We have passion, care for 
                                                 customers, socially responsible, strong work ethic and have humanitarian
                                                 support.
                                                
                                            </p>  
                                            
                                            {/* <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={Customer1} alt="deedee" id="kkk"/>
                                                
                                                    </div>
                                            
                                                    <div className="col-md-4">
                                                    <img src={Socially} alt="deedee" id="kkk"/>
                                                    </div>

                                                    <div className="col-md-4">
                                                    <img src={Strong} alt="deedee" id="kkk"/>
                                                    </div>
                                            </div> */}

                                        </div>

                                  
                            </div>
                          </div>
                        </section>

                        

                        <section id="meettheteam" className="p-5">

                                
                                <div className="contact container" >
                                   <div className="text-center">
                                      <div className="col-md-12 mb-5" >
                                        
                                            <h2>Meet The Team</h2>
                                            <p>
                                                We have a powerful team of which are experts in fashion designing and craft making. 
                                                We are here to bridge the gap between our people and our local fabric designs.
                                                                    
                                            </p>
                                     </div>
                
                                     </div>
                                 </div>



                                <div className="container">
                                    <div className="row">
                                

                                        <div className="col-md-6 " >
                                                <img src={Yee4} alt="deedee" id="dee" className="mb-5"/>
                                                <p>
                                                                        <h5>Amenorhu Redeemer</h5><br/>
                                                                        Business Owner                         
                                                </p>
                                        </div>
                                        
                                        
                                        <div className="col-md-6 mb-5" >
                                            <img src={Yee5} alt="deedee" id="dee" className="mb-5"/>   
                                            <p>
                                                                <h5>Appianing Appianing Dorothy</h5><br/>
                                                                Project Owner                         
                                            </p> 
                                      </div>
                                 </div>
                             </div>    
                        </section>
            </div>
        )
    }
}

export default About