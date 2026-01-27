import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList'
function App() {

  return (
    <>
      <div>
        <h2>Employee Data</h2>
        <EmployeeList />
      </div>
    </>
  )
}

export default App
