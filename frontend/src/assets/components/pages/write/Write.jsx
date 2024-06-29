
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 import hljs from 'highlight.js';
 import 'highlight.js/styles/monokai-sublime.css';



import { Link, useNavigate } from "react-router-dom";


const Write = () => {

  const url = "https://cuddly-space-disco-6pq5x5j4w6vcrwvj-3200.app.github.dev/writepage"
  
  const token = localStorage.getItem("token");

  // useEffect (() => {
  //   axios
  //   .get(url, {
  //     headers:{
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     })
  //     .then((res) =>{
  //       if (res.data.status === true) {
  //         console.log("success");
  //       } else {
  //         localStorage.removeItem("token")
  //         navigate("/")
  //         console.log("false")
  //       }
  //     })
    
  // }, [])

const [value, setValue] = useState('')

const modules = {
  
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean'],
    ['code-block'],
  ],
  
}
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'code-block'
]
  // const editorRef = useRef(null);
  // const handleData = async () => {
  //   if (editorRef.current) {
  //     const contentData = await editorRef.current.getContent()
  //     console.log(contentData);
  //   }
  // };

  const navigate = useNavigate()
  const navigateHome = () =>{
    navigate('/')
  }

const handleSetValue = () =>{
console.log(value)
}
  return (
    <>
   
   <form className="pt-20 h-[500px]">
  
 <ReactQuill value={value} onChange={setValue} className="h-[350px]" theme="snow"
  modules={modules}
  formats={formats}
 />

   </form>
   
   <Link></Link>
<button onClick={handleSetValue}  className="p-2 bg-slate-600 font-bold text-white rounded-lg m-5">Save Draft</button>
   
      
    </>
  );
}

export default Write