import { BrowserRouter as Router, Routes, Route } from 'react-router'

//Componentes
import Home from './pages/Home.jsx'
import CustomersList from './pages/customers/List.jsx'
import CustomersRegister from './pages/customers/Register.jsx'
import CustomersEdit from './pages/customers/Edit.jsx'

import TemplateDefault from "./templates/Default.jsx"
import TemplatePage from "./templates/Page.jsx"

import { ToastContainer } from 'react-toastify'; //Imports do react-toastify

function App() {

  return (
    <Router>
      <TemplateDefault>
      <ToastContainer />
        <Routes>
          <Route path="/customers/edit/:id" element={<TemplatePage title="Editar cliente" Component={CustomersEdit} />} />
          <Route path="/customers/add" element={<TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />} />
          <Route path="/customers" element={<TemplatePage title="Lista de clientes" Component={CustomersList} />} />
          <Route path="/" element={<TemplatePage title="Home" Component={Home} />} />
        </Routes>
      </TemplateDefault>
    </Router>
  )
}

export default App
