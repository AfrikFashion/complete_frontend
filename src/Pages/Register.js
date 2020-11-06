import React, { Component } from 'react'






class Register extends Component{
    render(){
        return(
            <div>
                <section id="signup" className="p-5">
                <div className="contact container" >
                    <div className="text-center">
                        <div className="col-md-12 mb-5" >
                                        
                            <h2>Register</h2>
                        </div>
                
                    </div>

                    <div className="row ">
                              <div className="col-md-12 ">
                                <div className="col-lg-7   sasc">
                                        <form action="forms/register.php" method="post" role="form" class="php-email-form">
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                            <label for="name">Your Name</label>
                                                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validate"></div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="name">Phone number</label>
                                                        <input type="text" class="form-control" name="text" id="text" data-rule="email" data-msg="Please enter a valid email" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                
                                               
                                                <div className="form-group">
                                                            <label for="name">Password</label>
                                                            <input type="password" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validate"></div>
                                                </div>
                                                
                                                <div className="form-group">
                                                            <label for="name"> Confirm Password</label>
                                                            <input type="password" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validate"></div>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <div className="loading">Loading</div>
                                                    <div className="error-message"></div>
                                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div className=" text-center"><button className="btn btn-lg btn-primary btn-block" type="submit">Register</button></div>
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

export default Register