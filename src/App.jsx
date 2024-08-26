import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import HomeMainSection from './Components/HomeMainSection'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMainSection from './Components/AboutMainSection'
import ExprienceMainSection from './Components/ExprienceMainSection'
import MainContact from './Components/MainContact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NavBar />}>
          <Route path='/' element={<HomeMainSection />}></Route>
          <Route path='/About' element={<AboutMainSection />}></Route>
          <Route path='/Exprience' element={<ExprienceMainSection />}></Route>
          <Route path='/Work' element={<h1>Work Page</h1>}></Route>
          <Route path='/Media' element={<h1>Media Page</h1>}></Route>
          <Route path='/Contact' element={<MainContact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
