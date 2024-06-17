import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./assets/components/pages/homepage/Homepage";
import Login from "./assets/components/pages/Login/Login";
import SignUp from "./assets/components/pages/SignUp/SignUp";
import About from "./assets/components/pages/About";
import Services from "./assets/components/pages/Services";
import NavBar from "./assets/components/NavBar";
import Write from "./assets/components/pages/write/Write";
import PostDetail from "./assets/components/PostDetail";

function App() {
  const home = "/";
  console.log(localStorage.getItem("token"));
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate to={home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="write" element={<Write />} />
        <Route path="post/:id" element={<PostDetail />} />
        <Route path="about/services" element={<Services />} />
        <Route path="*" element={<Navigate to={home} />} />
      </Routes>
    </>
  );
}

export default App;
