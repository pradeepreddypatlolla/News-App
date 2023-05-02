import React, { useEffect, useState } from 'react'
import { NewsAPI,APIKEY } from './config'
import Loader from './Loader'
import Card from './Card'
const NewsArea = (props) => {
    const [latestNews,setLatestNews]=useState([])
   
    useEffect(()=>{
      setLatestNews([]) 
       fetch(`${NewsAPI}/top-headlines?country=in&category=${props.category}&apiKey=${APIKEY}`)
       .then(data=>data.json())
       .then((data)=>{
         
        setLatestNews(data.articles) 
    })

    },[props])
    
    if(latestNews && latestNews.length===0){
      console.log("Loader")
      return <Loader/>
    }
  return (
    <div>
      <div>
      <h3 className='text-center'> Latest News  - {props.category.toUpperCase()}</h3>
      <div className="news-area flex">
      {
         latestNews && latestNews.map((article)=>{
            return(
              <Card article={article} />
            )
          })
      }
      </div>
    </div>
    </div>
  )
}

export default NewsArea
