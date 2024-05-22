import { useEffect, useState } from "react";
import reactimg from "../../assets/images/reactimg.png"
import axios from "axios"
import { Link } from "react-router-dom";

const Articles = () => {
  const [posts, setPosts] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      setPosts(data);
      
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  const handlePostDetail = () =>{
   fetchPosts()
  //  console.log(posts);
  }
   
  useEffect(() => {
    fetchPosts();
  }, []); 

  return (
    <>
      <div className='md:px-[100px] pt-20 content-start justify-around'>
        {posts.length > 0 && posts.map((postsDetails) => (
          <div key={postsDetails.id}>
          {/* <Link>
            <div onClick={handlePostDetail}><img src={reactimg} alt='reactimg' />
            
            <h2 className='font-bold py-3'>{postsDetails.title}</h2></div>
            
            </Link> */}

            <Link to={`/post/${postsDetails.id}`}>
            <div onClick={handlePostDetail}><img src={reactimg} alt='reactimg' />
            
            <h2 className='font-bold py-3'>{postsDetails.title}</h2></div>
                  </Link>

            <div className='py-3'>
              <h5>by Aliyu Adeniji <span>On 24th March, 2024.</span></h5>
            </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Articles;
