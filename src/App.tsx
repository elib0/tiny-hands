import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useCallback } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Preloader from './components/Preloader'
import { useDataLoader, loadSiteData } from './hooks/useDataLoader'

function App() {
  const { loading } = useDataLoader(useCallback(loadSiteData, []), 1500)

  if (loading) {
    return <Preloader />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
