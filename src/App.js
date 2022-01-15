import React from 'react'
import Landing from './pages/Landing'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// import object dari react-router-dom


// import pages di sini
import LandingPage from './pages/Landing'
import Feed from './pages/Index'
import Explorer from './pages/Explorer'

import

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Feed />}/>
        <Route exact path='/landing' element={<LandingPage />}/>
      </Routes>
    </Router>


    // <div>
    //   <Landing />
    // </div>
  )
}

export default App
