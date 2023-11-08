import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
