import React from 'react'
import Main from './Components/Main'
import "./App.css"
import Logosection from './Components/Logosection'
import About from './Components/About'
import Demo from './Components/Demo'
import Plan from './Components/Plan'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
export default function App() {
  return (
   <>
 {/* for main part intro section */}

<Main/>
<Logosection/>
   <About/>
   <Demo/>
   <Plan/>
   <Blog/>
   <Footer/>
   </>
  )
}
