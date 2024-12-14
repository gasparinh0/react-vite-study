import { BrowserRouter as Router, Routes, Route } from 'react-router'

//Componentes
import Home from './pages/Home.jsx'
import Customers from './pages/Customers.jsx'

import TemplateDefault from "./templates/Default.jsx"
import TemplatePage from "./templates/Page.jsx"

function App() {

  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/" element={<TemplatePage title="Home" Component={Home} />} />
          <Route path="/customers" element={<TemplatePage title="Customers" Component={Customers} />} />
        </Routes>
      </TemplateDefault>
    </Router>
  )
}

export default App
