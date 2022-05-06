import { useEffect, useState } from 'react'
import axios from 'axios';


const App = () => {
  let [cars,setCars] = useState([]);

  useEffect(()=>{
    getCars();
  },[])

  const getCars = () =>{
    axios.get('/api/getcars')
    .then( response =>{
      setCars(response.data)
    })
  }



  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand: 'Porsche',
      model: '911',
      year: 2000,
      avail: true
    })
    .then(response =>{
      console.log(response.data)
    })
  }

  const onCarRemove = () =>{
    axios.post('/api/removecar',{
      brand:'Ford'
    })
    .then( response =>{
      console.log(response.data)
      getCars();
    })
  }

  const onCarUpdate = () => {
    axios.post('/api/updatecar',{
      id:'62759e87fbef5b756e6e8b0c',
      brand:'Porschexxx'
    })
    .then( response => {
      console.log(response.data)
      getCars();
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
      <hr/>
        <h2>Remove element/s</h2>
        <button onClick={()=> onCarRemove()}>Delete it !!</button>
      <hr/>
        <h2>Update element</h2>
        <button onClick={()=> onCarUpdate()}>Update it !!</button>
    </div>
  )
}

export default App;