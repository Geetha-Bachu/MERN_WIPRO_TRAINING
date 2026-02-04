import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InventoryList from "./components/InventoryList";
function App() {
 

  return (
    <>
      <div className="container mt-4">
      <h2 className="text-center mb-4">Inventory Catalog</h2>
      <InventoryList />
    </div>
    </>
  )
}

export default App
