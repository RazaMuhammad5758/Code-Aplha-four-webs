import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div class="container">
        
        <div class="row">
          <div class="col1">
            <h1>
              Give Your Workout <br />
              A New Style
            </h1>
            <p>
              Success in not about greatness. It's about consistency. Consistent
              <br />
              hard work gains success. Greatness will come
            </p>
            <Link to="/products" className="btn">
        Explore Now &#8594;
            </Link>
          </div>
          <div class="col2">
            <img src="images/image1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
