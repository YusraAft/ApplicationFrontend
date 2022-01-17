import React, {useState,useEffect} from 'react'
import './Card.css';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'


function Cards(props){

    const [render, setRender] = useState(false)

    const cards = props.description.map((item, index)=> (

        <div className='card' key={item.id}>
            <h1 className='caption' id="title">Earth's picture id: {item.id}</h1>
              <img src={item.picture} alt="earth"/>

              <p className='caption' id='date'>Date: {item.date}</p>
              <p className='caption' id='lat'>Latitude: {item.lat}</p>
              <p className='caption' id='lon'>Longitude: {item.lon}</p>
              
              <button className="like" id={item.id} onClick={()=>{setLikes(item)}}>
                {item.like}
                  </button>
                 
          </div>
        

  ))

    function setLikes (item){
        
        if(item.liked){
            item.liked = false
            item.like = <FaThumbsUp/>
        }
        else{
            item.liked = true
            item.like = <FaRegThumbsUp/>
        }
        render ? setRender(false) : setRender(true)
        
    }

    useEffect(() => {
        const cards = props.description.map((item, index)=> (

            <div className='card' key={item.id}>
                <h1 className='caption' id="title">Earth's picture id: {item.id}</h1>
                  <img src={item.picture} alt="earth"/>
  
                  <p className='caption' id='date'>Date: {item.date}</p>
                  <p className='caption' id='lat'>Latitude: {item.lat}</p>
                  <p className='caption' id='lon'>Longitude: {item.lon}</p>
                  
                  <button className="like" id={item.id} onClick={()=>{setLikes(item)}}>
                    {item.like}
                      </button>
                     
                 {/* onClick={() => document.getElementById("likeButton").classList.toggle("unlike") */}
              </div>
            
  
      ))

    }, [render])
 
    return(
        <div className='cardSet'>
            {cards }
        </div>
       
    )
    
        
}



export default Cards