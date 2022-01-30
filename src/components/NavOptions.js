import React,{useState,useEffect} from 'react';
import NavCard from "./NavCard" ;
import "../styles/NavOptions.css"



const NavOptions = ({miphones,redmiphones,tv,laptops,lifestyle,home,audio,accessories}) => {


 const [miphonesToggle , setmiphonesToggle] = useState(false) ; 
 const [redmiphonesToggle , setredmiphonesToggle] = useState(false) ; 
 const [tvToggle , settvToggle] = useState(false) ; 
 const [laptopsToggle , setlaptopsToggle] = useState(false) ; 
 const [lifestyleToggle , setlifestyleToggle] = useState(false) ; 
 const [homeToggle , sethomeToggle] = useState(false) ; 
 const [audioToggle , setaudioToggle] = useState(false) ; 
 const [accessoriesToggle , setaccessoriesToggle] = useState(false) ;  
 
 

 useEffect(() => {
     if(window.location.pathname === "/miphones"){
         return setmiphonesToggle(true) ;
     }
     if(window.location.pathname === "/redmiphones"){
        return setredmiphonesToggle(true) ;
    }
    if(window.location.pathname === "/tv"){
        return settvToggle(true) ;
    }
    if(window.location.pathname === "/laptops"){
        return setlaptopsToggle(true) ;
    }
    if(window.location.pathname === "/lifestyle"){
        return setlifestyleToggle(true) ;
    }
    if(window.location.pathname === "/home"){
        return sethomeToggle(true) ;
    }
    if(window.location.pathname === "/audio"){
        return setaudioToggle(true) ;
    }
    if(window.location.pathname === "/accessories"){
        return setaccessoriesToggle(true) ;
    }
   
 }, []);
 



return (
  <div className='navOptions'>

   {miphonesToggle ? miphones.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {redmiphonesToggle ? redmiphones.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {tvToggle ? tv.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {laptopsToggle ? laptops.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {lifestyleToggle ? lifestyle.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {homeToggle ? home.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {audioToggle ? audio.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }

   {accessoriesToggle ? accessories.map((item,index)=>(
       <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
   )) : null }


  </div>
  );
};

export default NavOptions;
