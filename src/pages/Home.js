import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import BGImage from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className='home'>
      <div 
        className='headerContainer' style={{backgroundImage: `url(${BGImage})`}}>
          <div>
          <div className='info'>
            <h1>Nkosi's Crispy Crust Pizzeria</h1>
            <p>Where Every Bite is a Slice of Happiness!</p>
            <links to="/menu">
            <button>ORDER NOW!</button>
            </links>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home
