import React, { useEffect, useState } from 'react'
import './NewsApp.css'
import Header from './Header'
import NewsArea from './NewsArea'
import Footer from './Footer'
function NewsApp() {
const [category,setCategory]=useState("general")

useEffect(()=>{
   setActiveLink()
},[category])

const setActiveLink=()=>{
    const arr=["general","business","entertainment","sports"]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==category){
            document.getElementById(arr[i]).className="active"
        }
        else{
            document.getElementById(arr[i]).className="inactive"
        }
    }
}
  return (
    <div>
       
        <Header/>
            <navbar className="navbar">
                    <div className="container">
                        <ul className='flex'>
                            <li> <a id="general" onClick={()=>{ setCategory("general")}}>General</a>    </li>
                            <li> <a id="business" onClick={()=> { setCategory("business")}}>Business</a>    </li>
                            <li> <a id="entertainment" onClick={()=>{ setCategory("entertainment")}}>Entertainment</a>    </li>
                            <li> <a id="sports" onClick={()=>{ setCategory("sports")}}>Sports</a>    </li>
                        </ul>
                    </div>
            </navbar>
        <NewsArea category={category}/>
        <Footer/>
    </div>

  )
}

export default NewsApp
