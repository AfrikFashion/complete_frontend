import React, { Component } from 'react'
import Blog1 from '../img/blog1.jpg'
import Blog2 from '../img/blog2.jpg'
import Blog3 from '../img/blog3.jpg'
import Blog4 from '../img/blog4.jpg'
import Blog5 from '../img/blog5.jpg'
import Blog6 from '../img/new2.jpg'



class Blog extends Component{

    render(){
        return(
            <div>
                <section id="blog" className="p-5 mb-5">
                    <div className="container">
                        <div className="text-center">
                            <h2>Blogs</h2>
                            <p> 
                            This page helps you to know what goes in and out from the fashion sector. 
                            Be in touch always. We love you.
                         </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog1}   alt=""/>
                                <h3><a href="">FASHION BUSINESS ADVICE</a></h3>
                                <p> 
                                Having a chat with fashion entrepreneurs will help you move on the right path. 
                                            Hardwork pays.
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog2}   alt=""/>
                                <h3><a href="">BUSINESS ADVICE</a></h3>
                                <p> 
                                    Do not think of yourself alone. Think of others too. Let's do this together.
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog3}   alt=""/>
                                <h3><a href="">EXPLORING</a></h3>
                                <p> 
                                Mindset is also part of the story. Have a good one 
                                and then move on with all you want to do.
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog4}   alt=""/>
                                <h3><a href="">FASHION MARKETING</a></h3>
                                <p> 
                                    It takes passion and determination to get there. Get there with courage.
                                    
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog5}   alt=""/>
                                <h3><a href="">FASHION PROGRAM</a></h3>
                                <p> 
                                   It takes proper management to progress. Branding is the key.
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            <div className="col-md-4 blog-content">
                                <img className="img-fluid img-thumbnail img-blog" src={Blog6}   alt=""/>
                                <h3><a href="">OPERATIONS</a></h3>
                                <p> 
                                    Do you need people to work with? Our home is ready to help out.
                                    Just contact us.
                                </p>
                                <button className="btn btn-primary">Read more....</button>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Blog