import React from 'react'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import { Outlet } from 'react-router'

const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot