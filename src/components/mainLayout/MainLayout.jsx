// packages
import React from 'react'

// styling
import './MainLayout.scss'

// components
import { Header } from '../header/Header'
import { About } from '../about/About'
import { TechStack } from '../techStack/TechStack'
import { Profile } from '../profile/Profile'
import { Projects } from '../projects/Projects'

export const MainLayout = () => {
  return (
    <div className='MainLayout'>
        <Header />
        <About />
        <TechStack />
        <Profile />
        <Projects />
    </div>
  )
}
