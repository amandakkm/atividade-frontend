import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TestePage from "./pages/PaginaTeste/TestePage"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/teste" element={<TestePage/>}></Route>
      </Routes>
    </Router>
  )
}


export default App
