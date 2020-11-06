import React, { Component } from 'react'
import Cart1 from '../img/home3.jpg'
import Cart2 from '../img/stars.png'

class Cart extends Component{
    render(){
        return(
            <div>
                <section id="cart" className="p-5">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12">
                            <div><button type="go">Go back</button></div>
                        </div>
                

                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                        <div className="col-md-4">  
                                                <img src={Cart1} alt="Cart"  className="img-fluid" id="myy"/>
                                        </div>

                                        <div className="col-md-4">
                                        
                                                            <h4>African long dress Kente Made</h4>
                                                            <img src={Cart2} alt="Cart"  className="img-fluid" id="yyy"/>
                                                            <h5> Price: GHc 39.00</h5>
                                                            <p>Description: Kente long dress. This can be worn Engagement , party and other social organisations.</p>
                                        </div>
                                        
                                        <div className="col-md-4">
                                            
                                            <div >
                                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                        <div className="form-row">
                                                            <div className="form-group col-md-12">
                                                                    <label for="name">Price</label>
                                                                    <input type="number" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                                <div className="validate"></div>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="name">Status</label>
                                                                <input type="status" class="form-control" name="name" id="name"    />
                                                                <div className="validate"></div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                                    <label for="name">Qty</label>
                                                                    <input type="number" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                    <div className="validate"></div>
                                                        </div>
                                                        
                                                        <div className=" text-center"><button type="submit">Add to Cart</button></div>
                                                </form>
                                        </div>
                                    </div>            
                                    </div>            
                                    </div>            
                               <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">

                                        <div className="col-md-4 mb-5">
                                                      <div>
                                                            <label for="name">Reviews</label>
                                                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" placeholder="No Reviews" />
                                                        <div className="validate"></div>
                                                    </div>
                                        </div>
                                        <div className="col-md-4 mb-5">
                                                      <div>
                                                            <label for="name">Write a customer reviews</label>
                                                            <input type="number" name="name" class="form-control" id="name" data-rule="minlen:4" placeholder="select" />
                                                        <div className="validate"></div>
                                                    </div>
                                        </div>
                                        <div className="col-md-4 mb-5">
                                                      <div>
                                                            <label for="name">Comment</label>
                                                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validate"></div>
                                                    </div>
                                                    <div className="col-md-12"><button type="submit">SUBMIT</button></div>
                                        </div>
                                        
                                        </div>
                              </div>
                          </div>


                             
               </section>

                    
           </div>
        )
    }
}

export default Cart