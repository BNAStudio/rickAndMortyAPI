import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import './index.css'
import Characters from './Components/Characters/Characters';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
