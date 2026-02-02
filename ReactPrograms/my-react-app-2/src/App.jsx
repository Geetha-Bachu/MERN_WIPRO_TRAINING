import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <div>
      
      <Header />
        <h3>Hi , This is the app content.</h3>
        <p> React app content can be added here.</p>
        <div className='flex flex-wrap'>
        <Card cardTitle="React Js Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Full Stack Java Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MEAN Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MERN Course" cardDescription="Module frontend course for 40 days"></Card>
         <Card cardTitle="Dev OPs Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Cloud Computing Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Dot Net Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Python Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Azure  Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Angular Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Analyst Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Science Course" cardDescription="Module frontend course for 40 days"></Card>
        </div>
       
        <Footer />
    </div>
      
    </>
  )
}

export default App;