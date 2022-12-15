import React from 'react'
import Header from './Header'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Header />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Copyright 2022 Web Student</p>
        </footer>
    </div>
  )
}
