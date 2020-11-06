import React, { Component } from 'react'

class Signin extends Component{
    render(){
        return(
            <div>
                <section id="signup" className="p-5">
                    <div className="contact container" >
                            <div className="text-center">
                                <div className="col-md-12 mb-5" >
                                                
                                    <h2>Login</h2>
                                </div>
                        
                            </div>

                            <div className="wrapper">
                                <form className="form-signin">       
                                        <h2 className="form-signin-heading">Please login</h2>
                                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                                            <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
                                        <label className="checkbox">
                                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                                        </label>
                                        
                                      <a href="#"> <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button></a>
                                       <p className="message">Do not have an account? <a href="#">Register</a></p>
                                </form>
                            </div>
                            </div>

                    

                            
                
                    </section>
                    </div>
              
        )
    }
}

export default Signin