import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios"
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Reactlogo from "../images/reactimg.png"
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';

const NavBar = () => {
  const [nav, setNav] = useState(false);
   

  

 

  const handleNav = () =>{
    setNav(!nav);
  };

const closeNavBar = () =>{
  setNav(false)
}
  const navitems =[
    {name:"Home",
      path: '/'
  }, 
    {name:"Write an Article",
    path: "/writepage"
  }, 
    {name:"Contact Us",
      path: "/contact"
  },
  ]
 
  const navigate = useNavigate()
  const navigateHome = () =>{
    navigate('/')
  }

  return (
    <>
       <div  className='flex flex-row h-[40px] z-[100] top-0 fixed  bg-slate-500 text-white w-full items-center justify-between p-8'>
   
    <div onClick={closeNavBar}><img src={Reactlogo} className='h-6 w-6' onClick={navigateHome} /> </div>
    <ul className="gap-10 md:flex flex-row justify-between hidden">
    {navitems.map((navlinks)=>(
      <NavLink key={navlinks.name} className=" hover:cursor-pointer"
      to={navlinks.path}  
      >
        {navlinks.name}
     
     </NavLink>
     
    ))}
   
   
   
    </ul>
     <div className='md:block hidden items-center gap-50 justify-between' onClick={closeNavBar}>
     
     <button onClick={closeNavBar} className="bg-blue-400 hover:cursor-pointer px-4 rounded-md text-white"> <NavLink to="/login">Login</NavLink></button>
    <button onClick={closeNavBar} className="bg-blue-600 hover:cursor-pointer px-4  rounded-md text-white"><NavLink to='/signUp'>Signup</NavLink></button>
    </div> 

     <div className='md:hidden' onClick={handleNav}>  {nav? <CloseIcon /> : <MenuIcon /> }
     </div>
    </div>
    {nav && (
      <div onClick={closeNavBar} className='fixed z-10 top-[58px] md:hidden w-full  mt-1 bg-slate-500  h-[300px] '>
      <ul onClick={closeNavBar} className="gap-10 ">
    {navitems.map((navlinks)=>(
      <NavLink key={navlinks.name} onClick={closeNavBar} className="block p-5 font-semibold text-white hover:cursor-pointer"
      to={navlinks.path}  
      >
        {navlinks.name}
     
     </NavLink>
     
    ))}
   
   
   
    </ul>

    <div className='flex flex-col p-5 gap-4'>
     <button className="bg-blue-400 hover:cursor-pointer px-2 rounded-md text-white"> <NavLink to="/login">Login</NavLink></button>
    <button className="bg-blue-600 hover:cursor-pointer px-2  rounded-md text-white"><NavLink to='/signUp'>Signup</NavLink></button>
    </div> 
      </div>
      
    ) } 
    </>
   
  )
}

export default NavBar