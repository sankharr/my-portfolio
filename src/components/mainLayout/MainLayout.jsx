// packages
import React from 'react'

// styling
import './MainLayout.scss'

// components
import { Header } from '../header/Header'
import { About } from '../about/About'

export const MainLayout = () => {
  return (
    <div className='MainLayout'>
        <Header />
        <About />
    </div>
  )
}
