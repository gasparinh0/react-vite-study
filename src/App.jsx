import { BrowserRouter as Router, Routes, Route } from 'react-router'

//Componentes
import Home from './pages/Home.jsx'
import CustomersList from './pages/customers/List.jsx'
import CustomersRegister from './pages/customers/Register.jsx'
import CustomersEdit from './pages/customers/Edit.jsx'
import Login from './pages/Login.jsx'

import TemplateDefault from "./templates/Default.jsx"
import TemplatePage from "./templates/Page.jsx"
import TemplateClean from "./templates/Clean.jsx"


import { ToastContainer } from 'react-toastify'; //Imports do react-toastify

function App() {
  return (
      <Router>
        <Routes>
          {/* Rota para login */}
          <Route path="/login" element={<TemplateClean title="Acesso Restrito" Component={Login} />} />

          {/* Rotas com TemplateDefault */}
          <Route path="/" element={<TemplateDefault><TemplatePage title="Home" Component={Home} /></TemplateDefault>} />
          <Route path="/customers" element={<TemplateDefault><TemplatePage title="Lista de clientes" Component={CustomersList} /></TemplateDefault>} />
          <Route path="/customers/add" element={<TemplateDefault><TemplatePage title="Cadastro de clientes" Component={CustomersRegister} /></TemplateDefault>} />
          <Route path="/customers/edit/:id" element={<TemplateDefault><TemplatePage title="Editar cliente" Component={CustomersEdit} /></TemplateDefault>} />
        </Routes>
        <ToastContainer />
      </Router>
  )
}

export default App
