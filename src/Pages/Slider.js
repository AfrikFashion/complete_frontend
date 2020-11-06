import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../img/blogs.jpg'
import Slider2 from '../img/home1.png'
import Slider3 from '../img/Culture.jpg'


class Slider extends Component{

    render(){
        return(
            <div>
                

                <Carousel>
                    <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            src={Slider1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Contact Afriko</h3>
                            <p>How to start a clothing line</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Slider2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Week of celebration</h3>
                            <p>It is all about fashion.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Slider3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Culture</h3>
                            <p>Knowing more about Africa is the best.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider