// packages
import React from 'react'

// styling
import './About.scss'

// assets
import image from '../../assets/propic_new.jpg';

const About = () => {
  return (
    <div className='About'>
        <div className='About__leftSection'>
            <img src={image} alt=""/>
        </div>
        <div className='About__rightSection'>
            <div className='About__smallText'>
                    Hello, I'm
            </div>
            <div className='About__largeText'>
                    Sankha Rathnayake
            </div>
            <div className='About__smallText'>
                    Frontend Developer
            </div>
        </div>
    </div>
  )
}

export default React.memo(About);
