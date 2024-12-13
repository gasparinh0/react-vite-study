import { BrowserRouter as Router, Routes, Route } from 'react-router'

//Componentes
import Home from './pages/Home.jsx'
import Customers from './pages/Customers.jsx'
import TemplateDefault from "./templates/Default.jsx"

function App() {

  return (
    <TemplateDefault>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </TemplateDefault>
  )
}

export default App
