import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
// import HeroSlider from '@/components/header/slayder'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        {/* <HeroSlider/> */}
        <main className='min-h-[80vh]'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout