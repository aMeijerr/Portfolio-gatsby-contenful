import React from 'react'
import '../styles/global.css'
import Navbar from './navbar/index'

export default function Layout({ children }) {
  return (
    //Se över className och styling på overhaul
    <div className="layout">
        <Navbar />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>2022 - Alex Meijer</p>
        </footer>
    </div>
  )
}
