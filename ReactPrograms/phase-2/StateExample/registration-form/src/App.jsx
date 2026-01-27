import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import RegistrationForm from './components/registrationform.jsx'
import CourseList from './components/CourseList.jsx';
import JsonRegistrationForm from './components/JsonRegistrationForm.jsx';
function App() {


  return (
    <>
      <div>
      <RegistrationForm />
    </div>
    
    </>
  )
}

export default App;
