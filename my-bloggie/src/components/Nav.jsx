import {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"

const Nav = () => {

  const [activeTab, setActiveTab] = useState("Home")
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home")
    }else if (location.pathname === "/about") {
      setActiveTab("About")
    }else if (location.pathname === "/add") {
      setActiveTab("Add")
    }
  }, [location])

  return (
    <div className='nav w-[100%] bg-black flex justify-between items-center px-6 py-5'>
      <div className="logo text-white text-5xl">
        <h1>Bloggie</h1>
      </div>
      {
        menu ? "" :<div className=' lg:hidden w-[10%] p-3 text-slate-200 flex justify-end'>
        <h1 className=' font-bold text-3xl' onClick={() => setMenu(!menu)}>=</h1>
      </div>
      }
      <div className='nav-link hidden lg:flex justify-end gap-4 w-[30%] p-5 text-slate-200'>
        <Link to="/" onClick={() => setActiveTab("Home")}>
          <p className={activeTab === "Home" ? "active" : ""}>Home</p>
        </Link>
        <Link to="/about" onClick={() => setActiveTab("About")}>
          <p className={activeTab === "About" ? "active" : ""}>About</p>
        </Link>
        <Link to="/add" onClick={() => setActiveTab("Add")}>
          <p className={activeTab === "Add" ? "active" : ""}>Add</p>
        </Link>
      </div>

      {
        menu === true ? <div className={menu ? " h-screen fixed top-0 right-[0] bg-black/95 text-white p-10 w-[60%]" : "w-0"}>
          <div className=' p-3 text-slate-200 flex justify-end'>
            <h1 className=' font-bold text-3xl' onClick={() => setMenu(!menu)}>=</h1>
          </div>
          <div>
            <Link to="/" onClick={() => {
              setActiveTab("Home")
              setMenu(!menu)
            }}>
              <p className={activeTab === "Home" ? "active" : ""}>Home</p>
            </Link>
            <Link to="/about" onClick={() => {
              setActiveTab("About")
              setMenu(!menu)
            }}>
              <p className={activeTab === "About" ? "active" : ""}>About</p>
            </Link>
            <Link to="/add" onClick={() => {
              setActiveTab("Add")
              setMenu(!menu)
            }}>
              <p className={activeTab === "Add" ? "active" : ""}>Add</p>
            </Link>
          </div>
        </div> : ""
      }
    </div>
  )
}

export default Nav