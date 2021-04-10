import React from 'react'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import {Route, Redirect} from 'react-router-dom'

const Body = () => {
    return(
        <div>
            <Route path="/" exact component={Home}/>
            <Route path="/menu" exact component={Menu}/>
            <Route path="/conact" exact component={Contact}/>
            <Route path="/about" exact component={About}/>
        </div>
    );
}
export default Body;