import { BrowserRouter as Router, Routes, Route } from 'react-router'

//Componentes
import Home from './pages/Home.jsx'
import TemplateDefault from "./templates/Default.jsx"

function App() {

  return (
    <TemplateDefault>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </TemplateDefault>
  )
}

export default App
