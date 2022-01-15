import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({ element: Component }) => {
  const isSignIn = false
  return isSingIn ? <Outlet /> : <Navigate to='Landing.js' />
}

export default PrivateRoute
