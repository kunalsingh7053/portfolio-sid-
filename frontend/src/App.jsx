import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import CursorBubble from './components/CursorBubble'

const App = () => {
  return (
    <div className="app-shell">
      <div className="grain" aria-hidden />
      <CursorBubble />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
