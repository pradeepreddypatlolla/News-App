import React from 'react'

const Card = (props) => {
    const article=props.article
  return (
    <div className="card">
    <a href={article.url}> 
     
     <div className='image-container'> 
     <img src={article.urlToImage} alt="" />
     </div>
     <p className='title'>{article.title}</p> 
     <div className="article-source-time">
       <div>{article.source.name}</div> 
       <div>{article.publishedAt.substr(0,10)+"  "+article.publishedAt.substr(11)} </div>
     </div>
     <span className='read-more'> Click to read </span>
     </a>
    
   </div>
  )
}

export default Card
