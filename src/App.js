import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// import object dari react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import pages di sini
import Landing from './pages/Landing'
import Feed from './pages/Feed'

// import private route di sini
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/feed' element={<Feed />} />
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/' element={<Feed />} />
        </Route>
      </Routes>
    </Router>

    // <div>
    //   <Landing />
    // </div>
  )
}

export default App
