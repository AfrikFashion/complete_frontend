import React, { Component } from 'react'
import Slider from './Slider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import './Main.css'
import frik1 from '../img/cccc.jpg'
import frik2 from '../img/smock2.jpg'
import frik3 from '../img/craft3.jpg'
import frik4 from '../img/beady.png'
import frik5 from '../img/home3.jpg'
import frik6 from '../img/craft5.jpg'
import frik7 from '../img/blog1.jpg'
import frik8 from '../img/blog2.jpg'
import frik9 from '../img/blog3.jpg'


class Home extends Component{

    render(){
        return(
            <div>             
                                <Slider/>
                                <section id="home" className="p-5">

                                        <div className="row m-5 ">
                                                    <div className="col-md-4">
                                                        <a to=''>
                                                            <Card  className='my-5'>
                                                                <Card.Img variant="top" src={frik1} fluid />
                                                                <Card.Body>
                                                                    <Card.Title><b>Local Basket</b></Card.Title>
                                                                    <Card.Text>
                                                                    They were traditionally produced without handles and used as woven instruments 
                                                                    for farming, 
                                                                    like storage containers or colanders to separate millet from the millet waste.
                                                                     Handles have been added later on to carry items to and from the market.
                                                                    </Card.Text>
                                                                    
                                                                </Card.Body>
                                                            </Card>
                                                        </a>
                                                </div>
                                            
                                                <div className="col-md-4">
                                                        <Card className='my-5'>
                                                            <Card.Img variant="top" src={frik2} fluid/>
                                                            <Card.Body>
                                                                <Card.Title><b>Smock</b></Card.Title>
                                                                <Card.Text>
                                                                A Ghanaian smock is a plaid shirt that is similar to the dashiki, worn by men in Ghana.
                                                                There are also female versions of it. The smock is also called fugu  
                                                                It is worn by kings in the three northern regions but is now popular across Ghana.
                                                                </Card.Text>
                                                            
                                                            </Card.Body>
                                                        </Card>
                                                </div>
                                            
                                                <div className="col-md-4">
                                                        <Card  className='my-5'>
                                                            <Card.Img variant="top" src={frik3} fluid/>
                                                            <Card.Body>
                                                                <Card.Title><b>Craft</b></Card.Title>
                                                                <Card.Text>
                                                                A craft is a profession that requires particular 
                                                                skills and knowledge of skilled work. In a historical sense, 
                                                                particularly the Middle Ages and earlier, 
                                                                the term is usually applied to people occupied in small-scale 
                                                                production of goods, or their maintenance.
                                                            
                                                                </Card.Text>                           
                                                            </Card.Body>
                                                        </Card>
                                                </div>

                                                <div className="col-md-4">
                                                        <Card  className='my-5'>
                                                            <Card.Img variant="top" src={frik4}fluid />
                                                            <Card.Body>
                                                                <Card.Title><b>Beads</b></Card.Title>
                                                                <Card.Text>
                                                                There are more to beads rather than only putting it on our hand. 
                                                                At first, beads was a thing for women but currently, men and the others wear beads. 
                                                                As a Ghanaian, let us do our best to patronize our Ghanaian beads.
                                                                </Card.Text>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                </div>
                                            
                                                <div className="col-md-4">
                                                        <Card className='my-5'>
                                                            <Card.Img variant="top" src={frik5} href="#" fluid/>
                                                            <Card.Body>
                                                                <Card.Title><b>Styles</b></Card.Title>
                                                                <Card.Text>
                                                                With fashion, the most important thing one can think of is the style. 
                                                                Always get your style in mind and there you go. Style is all you can think of.
                                                                type or makea new style of house. 
                                                                The way in which something is donegood or bad style. 
                                                                </Card.Text>
                                                            
                                                            </Card.Body>
                                                        </Card>
                                                </div>
                                            
                                                <div className="col-md-4 ">
                                                        <Card  className='my-5'>
                                                            <Card.Img variant="top" src={frik6} fluid/>
                                                            <Card.Body>
                                                                <Card.Title><b>Others</b></Card.Title>
                                                                <Card.Text>
                                                                We have in our custody many things you could think of. Get yourself an Afrik fashion wear
                                                                and you will see how beauty is all about. Fashion is hallmark. Creative at it's best. With fashion, 
                                                                one can express him or herself through dressing.
                                                                </Card.Text>                           
                                                            </Card.Body>
                                                        </Card>
                                                </div>
                                                



                                        </div>
                                </section>
                                
                                
                                
                                
                                <div className='row'>
                                        <div className='row text-center ml-5'>
                                                <div className='col-md-12 '>
                                                    <h2>Latest Post</h2>
                                                </div>
                                        </div>
                            

                            <div className="row m-5">
                                <div className="col-md-4">
                                    <Card  className='my-5'>
                                        <Card.Img variant="top" src={frik7} fluid />
                                        <Card.Body>
                                            <Card.Title><a href="./Blog">FASHION BUSINESS ADVICE </a></Card.Title>
                                            <Card.Text>
                                            Having a chat with fashion entrepreneurs will help you move on the right path. 
                                            Hardwork pays.
                                            </Card.Text>
                                            <Button variant="primary">Read more</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                        
                                <div className="col-md-4">
                                    <Card className='my-5'>
                                        <Card.Img variant="top" src={frik8} fluid/>
                                            <Card.Body>
                                                <Card.Title><a href="">BUSINESS ADVICE</a></Card.Title>
                                                <Card.Text>
                                                Do not think of yourself alone. Think of others too. Let's do this together.                                                </Card.Text>
                                                <Button variant="primary">Read more</Button>
                                            </Card.Body>
                                        </Card>
                                </div>
                        
                                <div className="col-md-4">
                                    <Card  className='my-5'>
                                        <Card.Img variant="top" src={frik9} fluid/>
                                        <Card.Body>
                                            <Card.Title><a href="">EXPLORING</a></Card.Title>
                                            <Card.Text>
                                            Mindset is also part of the story. Have a good one 
                                            and then move on with all you want to do.
                                            </Card.Text>
                                            <Button variant="primary">Read more</Button>
                                        </Card.Body>
                                    </Card>
                            </div>
                           
                            </div>
                   

                </div>
                  
          

            


            

                                








           
                  
              
                  
          
                    

            </div>
        )
    }
}

export default Home