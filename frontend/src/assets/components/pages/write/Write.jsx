
import { useEffect, useRef, useState } from "react";


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 import hljs from 'highlight.js';
 import 'highlight.js/styles/monokai-sublime.css';



import { useNavigate } from "react-router-dom";
// import './App.css';


const Write = () => {

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
   
<button onClick={handleSetValue}  className="p-2 bg-slate-600 font-bold text-white rounded-lg m-5">Save Draft</button>
   
      
    </>
  );
}

export default Write