import React, { Component } from 'react'


class Contact extends Component{

    render(){
        return(
            <div>
               <section id="contact_us" className="p-5">
                    <div className="container">
                        <div className="text-center">
                            <h2>CONTACT US</h2>
                        </div>
                    </div>


                        
                        <div className=" contact container">
                            <div className="row">

                               <div className="col-md-6">  
                                        <div className="section-title">
                                            <h6>GET IN TOUCH WITH US.</h6>
                                            <p> 
                                                Keeping in touch with us will actually
                                                help us know what you want.
                                            </p>
                                        </div><br></br>

                                      <div >
                                            <h4>Call Numbers</h4>
                                            <h6 id="gal">+233546000451</h6><br></br><br></br>
                                            <h4>Location</h4>
                                            <h6 id="gal">Sunyani, Ghana.</h6><br></br><br></br>
                                            <h4>Email</h4><br></br>
                                            <a href=""><h6 id="gal">afrikfashion1820@gmail.com</h6></a>
                                     </div>
                                </div>

                                <div className="col-md-6">
                                     <div className="section-title">
                                            <h6>MESSAGE US.</h6>
                                     </div><br></br>

                                    <div >
                                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                            <label for="name">Your Name</label>
                                                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validate"></div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="name">Your Email</label>
                                                        <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                            <label for="name">Subject</label>
                                                            <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validate"></div>
                                                </div>
                                                <div className="form-group">
                                                            <label for="name">Message</label>
                                                            <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                                                            <div className="validate"></div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="loading">Loading</div>
                                                    <div className="error-message"></div>
                                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div className=" text-center"><button className="btn btn-lg btn-primary btn-block" type="submit">Send Message</button></div>
                                        </form>
                                 </div>
                            </div>            
                    </div>
                </div>                    
               </section>
            </div>
        )
    }
}

export default Contact