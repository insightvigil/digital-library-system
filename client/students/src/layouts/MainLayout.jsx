import { useState } from 'react'
import './MainLayout.scss'

//Components
import BookCard from '../features/catalog/components/BookCard/BookCard.component'
import BookGrid from '../features/catalog/components/BookGrid/BookGrid.component'
import BookShelf from '../features/catalog/components/BookShelf/BookShelf.component'

import Navbar from '../shared/components/Navbar/Navbar.component'
import Footer from '../shared/components/Footer/Footeer.component'

import Home from '../features/catalog/pages/Home/Home.page'
import { Outlet } from 'react-router'

function MainLayout() {

  return (
    <>
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </>
  )
}

export default MainLayout
