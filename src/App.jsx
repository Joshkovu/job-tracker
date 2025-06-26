// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import Job from './Components/Job/Job'
import Tasks from './Components/Tasks/Tasks'
import Settings from './Components/Settings/Settings'
import Stats from './Components/Stats/Stats'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Settings" element={<Settings />} />
        {/* <Route path="/support" element={<Support />} /> */}
      </Routes>
  
{/* <Home /> */}
    </>
  )
}

export default App
