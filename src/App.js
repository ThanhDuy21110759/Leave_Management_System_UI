import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import EmployeePage from './components/Employee'
import './index.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/SignUp" element={<SignUp setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App