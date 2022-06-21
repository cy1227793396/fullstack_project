import { lazy, useState } from 'react'
import { useRoutes } from 'react-router'
import './App.css'
import routes from './routes'
const Header=lazy(()=>import('./components/Header'))
const Footer=lazy(()=>import('./components/Footer'))
function App() {
const element=useRoutes(routes)
  return (
    <div className="App">
      <Header/>
      {element}
      <Footer/>
    </div>
  )
}

export default App