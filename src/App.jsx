import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import GameDetail from "./components/GameDetail/GameDetail"

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/game/:gameId" element={<GameDetail />} />
      </Routes>
    </Router>
  )
}

export default App
