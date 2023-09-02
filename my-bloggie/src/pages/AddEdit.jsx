import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"

const initialState = {
  title: "",
  content: "",
  author: ""
}

const AddEdit = () => {

  const [post, setPost] = useState(initialState)
  const {title, content, author} = post
  const navigate = useNavigate()

  const {id} = useParams()

  useEffect(() =>{
    getPost(id)
  }, [id])
  

  // handle changes
  const handleChange = (ev) => {
    const {name, value} = ev.target
    setPost({...post, [name]: value})
    console.log(post)
  }

    // handle get post with id
    const getPost = async (id) => {
      const response = await axios.get(`http://localhost:4000/post/${id}`)
      setPost({...response.data[0]})
    }

  // handle newly added post
  const addPost = async (data) => {
    const response = await axios.post("http://localhost:4000/post", data)
    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  //handle update
  const updatePost = async (id, data) => {
    const response = await axios.patch(`http://localhost:4000/post/${id}`, data)
    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  // handle submit
  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!title || !content || !author) {
      toast.error("Please Fill in Empty Field")
    }else{
      if (!id) {
        addPost(post)  
      }else{
        updatePost(id, post)
      }
      
      navigate("/")
    }
  }

  return (
    <div className=" w-[100%] md:w-[70%] lg:w-[40%] mx-auto p-3 lg:h-[80vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" w-[100%] flex flex-col p-7 lg:mt-11 bg-white rounded-md">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Enter Title" onChange={handleChange} value={title} className=" p-3" />
        <label htmlFor="content">Content</label>
        
        <textarea type="text" name="content" placeholder="Enter Message" onChange={handleChange} value={content} className=" p-3" cols="30" rows="5"></textarea>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" placeholder="Enter Name" onChange={handleChange} value={author} className=" p-3" />
        <button className=" mt-5 w-full bg-[coral] p-4 rounded-md text-[21px] text-white hover:bg-green-500">{id ? "Update" : "Post"}</button>
      </form>
    </div>
  )
}

export default AddEdit
