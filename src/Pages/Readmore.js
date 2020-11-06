import React, {Component} from 'react'
import Readmore1 from '../img/blog1.jpg'


class Readmore extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                            <div className="mb-5">
                            <img src={Readmore1} alt="Readmore"  className="img-fluid" id="myy"/>
                            </div>

                            <div>
                            <b><h3 className="text-center"> FASHION BUSINESS AND ADVICE</h3></b>
                            <p>Having a chat with fashion entreneurs will help you move on the right path. Hard work pays.<br></br>
                            Here are top 10 tips on starting a successful fashion.
                            </p>
                            
                            1. Define business <br></br>
                            2. Think like an entrepreneur. <br></br>
                            3. Start small with one product. <br></br>
                            4. Set right prices. <br></br>
                            5. Put everything on a website. <br></br>
                            6. Have a vision for brand identity. <br></br>
                            7. Promote your brand on social media <br></br>
                            8. Distribute flyers and brochures. <br></br>
                        9. Learn to connect. <br></br>
                        10. Have a fashion eye.<br></br>
                        

                            </div>

                    </div>
                </div>
                    
            </div>
        )
        
    }
}




export default Readmore