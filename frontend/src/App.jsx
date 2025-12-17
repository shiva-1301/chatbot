import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/embed" element={<ChatWidget autoOpen={true} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
