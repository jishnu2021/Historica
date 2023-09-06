import React from 'react'
import {Link} from 'react-router-dom'
const Blogs = () => {
  return (
    <>
              <div className="heading">
              <h1><center>The Bits and Bites</center></h1>
               </div>
               <nav className="header">
                <div className="head1">
            <ul className="list">
                <li><Link to='#'>Career</Link></li>
                <li><Link to='#'>Community</Link></li>
                <li><Link to='#'>News</Link></li>
                <li><Link to='#'>Founder</Link></li>
                <li><Link to='#'>Engineering</Link></li>
            </ul>
            <div className="logo">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
       </nav>
        <div className="latest">
        <h2><center>Latest</center></h2>
        </div>

        <div class="shop-section">
      <div class="blog1 blog">
        <div class="blog-content">
          <h2>Healt & Personal Care</h2>
          <div
            class="blog-img">
              <img src="box1_image.jpg" alt="" style={{width:"300px"}}/>
            </div>
          <p><a>see more</a></p>
        </div>
      </div>
      
      <div class="blog2 blog">
        <div class="blog-content">
            <h2>Cloths And All</h2>
            <div
              class="blog-img"><img src="box2_image.jpg" alt=""  style={{width:"300px"}}/></div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog3 blog">
        <div class="blog-content">
            <h2>Furniture</h2>
            <div
              class="blog-img" ><img src="box3_image.jpg" alt=""  style={{width:"300px"}}/></div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog4 blog">
        <div class="blog-content">
            <h2>Electronics Devices</h2>
            <div
              class="blog-img" ><img src="box4_image.jpg" alt=""  style={{width:"300px"}}/></div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog5 blog">
        <div class="blog-content">
            <h2>Beauti pics</h2>
            <div
              class="blog-img"><img src="box5_image.jpg" alt=""  style={{width:"300px"}}/></div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog6 blog">
        <div class="blog-content">
            <h2>Pet Care</h2>
            <div
              class="blog-img" ><img src="box6_image.jpg" alt=""  style={{width:"300px"}}/></div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog7 blog">
        <div class="blog-content">
            <h2>New arrival toys</h2>
            <div
              class="blog-img"
              
            >
              <img src="box7_image.jpg" alt=""  style={{width:"300px"}}/>
            </div>
            <p><a>see more</a></p>
          </div>
      </div>
      <div class="blog8 blog">
        <div class="blog-content">
            <h2>Discover fashion trends</h2>
            <div
              class="blog-img"
            >
              <img src="box8_image.jpg" alt=""  style={{width:"300px"}}/>
            </div>
            <p><a>see more</a></p>
          </div>
      </div>
    </div>

    </>
  )
}

export default Blogs
