import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './Content'

function App() {
  return (
    <>
    <Header />
    <Sidebar />
    <Content />
    </>
  )
}

export default App
