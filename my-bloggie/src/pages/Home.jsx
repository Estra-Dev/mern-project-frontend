import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    const response = await axios.get("http://localhost:4000/posts")
    setPosts(response.data)
  }

  const onDeletePost = async(id) => {
    const response = await axios.delete(`http://localhost:4000/post/${id}`)
    if (response.status === 200) {
      toast.success(response.data)
      getPost()
    }
    console.log(response)
  }

  return (
    <div>
      {
        posts.map(post => (
          <div key={post._id} className=" w-[100%] md:w-[70%] lg:w-[50%] bg-white mx-auto mt-3 rounded-md p-7 max-h-[700px] ">
            <div className=" w-[100%] pb-7">
              <div className=" flex justify-between items-center break-words w-[100%]">
                <h1 className=" text-[15px] lg:text-[17px] font-bold w-[70%]">Title: {post.title}</h1>
                <pre className=" text-[11px] w-[25%] hidden md:block ">{post.date}</pre>
              </div>
              
              <div className="post-block ml-[35px] mt-3 p-5 break-words">
                <p className=" pb-4">{post.content.slice(0, 200)}</p>
                <h3>~@{post.author}.~</h3>
                <pre className=" text-[11px] w-[25%] md:hidden ">{post.date}</pre>
              </div>
              
            </div>
            <hr />
            <div className=" w-[200px] flex gap-3 text-[12px] items-center p-3">
              <Link to={`/update/${post._id}`}>
                <button className=" p-1 bg-[coral] text-white text-[10px] rounded-md">Edit</button>
              </Link>
              <button onClick={() => onDeletePost(post._id)} className=" p-1 bg-red-500 text-white text-[10px] rounded-md" >Delete</button>
              <Link to={`/view/${post._id}`}>
                <button className=" p-1 bg-green-500 text-white text-[10px] rounded-md">View</button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home