import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledRegistrationForm from './components/ControlledRegistrationForm.jsx'
import UncontrolledRegistrationForm from './components/UncontrollRegistraForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
       <ControlledRegistrationForm />
      <UncontrolledRegistrationForm />
    </div>
      
    </>
  )
}

export default App
