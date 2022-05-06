import { useEffect, useState } from 'react'
import axios from 'axios';


const App = () => {
  let [cars,setCars] = useState([]);

  useEffect(()=>{
    axios.get('/api/getcars')
    .then( response =>{
      setCars(response.data)
    })
  },[])



  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand: 'Porche',
      model: '911',
      year: 2022,
      avail: true
    })
    .then(response =>{
      console.log(response.data)
    })
  }



  return(
    <div className='app'>
      <h1>Add car</h1>
      <button
        onClick={()=> onCarSubmit()}
      >
        Add car to DB
      </button>
      <hr/>
      { cars.map((car)=>(
        <div key={car._id}>
          {car.brand}
        </div>
      ))
      }

    </div>
  )
}

export default App;