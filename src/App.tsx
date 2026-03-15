import { Routes, Route, Navigate } from "react-router-dom"
import Login from './Pages/Login'
import PcteHome from './Pages/Pcte/PcteHome'
import PsiHome from './Pages/Psi/PsiHome'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Pcte/PcteHome" element={<PcteHome />} />
        <Route path="/Psi/PsiHome" element={<PsiHome />} />
      </Routes>
  )
}

export default App