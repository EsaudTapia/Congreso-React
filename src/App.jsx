import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PaginaPrincipal from './pages/PaginaPrincipal'
import AppRoutes from './routes/AppRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <AppRoutes>
      </AppRoutes>
    </div>
  )
}

export default App
