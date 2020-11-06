import React from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Readmore from './Pages/Readmore';
import Register from './Pages/Register';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Contact" component={Contact} />    
        <Route exact path="/Readmore" component={Readmore} />    
        <Route exact path="/Register" component={Register} />    
          
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
