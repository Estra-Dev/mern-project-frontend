import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const View = () => {

  const [post, setPost] = useState([])

  const {id} = useParams()

  useEffect(() =>{
    getPost(id)
  }, [id])

  const getPost = async (id) => {
    const response = await axios.get(`http://localhost:4000/post/${id}`)
    setPost(response.data)
  }

  return (
    <div>
      <h1 className=" text-center font-bold text-3xl pt-11">Post Details</h1>
      {
        post.map(item => (
          <div key={item._id} className="view-block">
            <div className=" w-[100%] md:w-[70%] lg:w-[50%] h-[300px] bg-white rounded-md p-7">
              <h1 className=" font-bold">ID: <span className=" font-medium">{item._id}</span></h1>
              <p className=" font-bold">Title: <span className=" font-medium">{item.title}</span></p>
              <p className=" font-bold">Content: <span className=" font-medium">{item.content}</span></p>
              <h3 className=" font-bold">Author: <span className=" font-medium">{item.author}</span></h3>
              <pre className=" font-bold">Date added: <span className=" font-medium">{item.date}</span></pre>
              <div className=" mt-10 w-[100%] flex justify-center">
                <Link to="/"><p className=" p-3 w-20 bg-green-700 text-white text-center rounded-md">Back</p></Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default View