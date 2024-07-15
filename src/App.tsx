import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
function App() {

  return (
     <>
      <Routes>
        <Route path='/' element={<Navigate  replace to="/index"></Navigate>}></Route>
      </Routes>
      <Outlet></Outlet>
      </>
  )
}

export default App