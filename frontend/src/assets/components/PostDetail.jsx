import React, { useEffect, useState } from 'react';
import reactimg from "../../assets/images/reactimg.png"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const {id: postId} = useParams()
  const [post, setPost] = useState({})    
  

  useEffect(() => {
    async function fetchData() {
      const  response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const data = response.data;
      setPost(data)
    }
    fetchData()
  }, [postId])

  return (
    <>
    <div className='md:px-[100px] pt-20'>
     
        
        
          <div className='items-center content-center justify-center' ><img src={reactimg} alt='reactimg' />
         
          </div>
          
          
          <div className='py-3'>
            <h5>by Aliyu Adeniji <span>On 24th March, 2024.</span></h5>
          </div>
        
        <div> 
        <article>
        {post.body}
        </article>
        </div>
    
    </div>
  </>
  )
}

export default PostDetail