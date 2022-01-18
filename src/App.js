import './App.css';
import React, {useState, useEffect} from 'react'
// import { getPictures } from './api';
import Cards from './Cards.js'
import { FaRegThumbsUp, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'



function App() {

  const baseURL = "https://epic.gsfc.nasa.gov/api/natural/date/"
   
  let lastDay = new Date((new Date()).valueOf() - 1000*14400*24);
  lastDay = lastDay.toISOString().split('T')[0]
  let firstDay = new Date('2015-06-18')
  firstDay = firstDay.toISOString().split('T')[0]

  const[selectedDate, setSelectedDate] = useState("")
  const[finalDate, setFinalDate]= useState(lastDay)
  // const[pictures, setPictures] = useState([])
  const[description, setDescription] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalDate(selectedDate)

  }

  useEffect( () => {
    alert("Hi user, there is currently a bug spotted due to which you must tap the like button twice on any image the first time you like that image. Thank you!")
  }, []

  )
 

  function pullPictures(pictures){
    
    let descriptions = []
    let len_ = pictures.length
    for(let i = 0; i < len_; i++){
      let new_date = finalDate.replace(/-/g, "/")
      let image = pictures[i].image
      let pic = `https://epic.gsfc.nasa.gov/archive/natural/${new_date}/png/${image}.png`
      let longitude = pictures[i].centroid_coordinates.lon
      let latitude = pictures[i].centroid_coordinates.lat
      let date = pictures[i].date
      let identifier = pictures[i].identifier
      let dictionary = {id: i, picture: pic, lon:longitude, lat:latitude, like:<FaRegThumbsUp/>, liked: false, date:date, id:identifier}
      descriptions.push(dictionary)
      
    }
    setDescription(descriptions)
    
  }

  useEffect(() => {
    if(finalDate !== ""){
    function getPictures(date){
      fetch(`${baseURL}${date}`)
          .then(response => response.json())
          .then(pictures =>{
            pullPictures(pictures)
            console.log(pictures[0])
            
          });
        }
  getPictures(finalDate)
      }
  }, [finalDate]
  )
  
  const styleObj = {
    fontSize: 30
  }

  return (
   
 
    <div>
    <div className="Date">
      <label className="instructions">Pick The Date You Want to See Earth On:</label>
      <form onSubmit={handleSubmit}>
        <input type="date" id="dateChosen"  style={styleObj} min={firstDay} max={lastDay} value ={selectedDate}
          onChange={(e)=>setSelectedDate(e.target.value)}/>
          
        <p>{`Please note, only enter dates between ${firstDay} and ${lastDay} (please note this is in YYYY/MM/DD format) `}</p>
        <button className="submit" onClick={(console.log(selectedDate))}>Submit</button>
      </form>
    </div>

      <div className="pics">
        <Cards description={description}/>

      </div>

    </div>

  );
  
}



export default App;
