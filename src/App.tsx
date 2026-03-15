import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')
  
  async function postData() {
    try {
      const response = await axios.post('http://localhost:3000/users', {
        cpf,
        password
      });
      return response.data; //Retorna o ID, guardar em variavel de sessão ou localStorage
    } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message ?? "Erro da API")
        } 
        else {
          setError("Erro inesperado")
        }
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    postData()
  
  }

  useEffect(() => {
    if(error){
      alert(error)
    }
  }, [error])

  return (
      <>
      <form onSubmit={handleRegister}>
        <div className="mb-3 container position divContainer">
          <div className="form-control divContainer" id="menu" >
            <div>
              <label htmlFor="TxtCpf" className="form-label">CPF</label>
              <input 
                type="text" 
                className="form-control" 
                id="TxtCpf" 
                placeholder="000.000.000.00"
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div id="labelPassword">
              <label htmlFor="TxtPass" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="TxtPass" 
                placeholder="Digite sua senha" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              id="butao">
              Cadastrar
            </button>
          </div>
            
          
        </div>
        </form>
    </>
  )
}

export default App