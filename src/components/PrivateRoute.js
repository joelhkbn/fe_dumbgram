import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({ element: Component }) => {
  const isSignIn = false

  return isSignIn ? <Outlet /> : <Navigate to='/feed' />
}

export default PrivateRoute
