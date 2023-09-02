import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import About from "./pages/About"
import AddEdit from "./pages/AddEdit"
import View from "./pages/View"
import "./App.css"
import Nav from "./components/Nav";

function App() {
  

  return (
    <Router>
      <ToastContainer position="top-center" />
      <div className="container-main w-[100%]">
        <Nav />
        <div className=" p-4 pt-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
