import React from 'react'
import {Link} from "react-router-dom";
function Nav() {
  return (
    <>
    <nav className="navbar">
        <div className="left">
            <h1><Link to="/">Historio</Link></h1>
        </div>
        <div className="right">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkBtn">
                <i className="fa fa-bars"></i>
            </label>
            <ul className="list">
                <li><Link to='about'>About us</Link></li>
                {/* <li><Link to='contest'>Contest</Link></li> */}
                <li><Link to='blogs'>Blogs</Link></li>
                <li><Link to='gallery'>Gallery</Link></li>
                <li><Link to='contact'>Contact us</Link></li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Nav

