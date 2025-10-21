import './App.css';
import { useState,useEffect} from 'react';

function App() {
const [fruit,setFruit] = useState([])
const [ladowanie,setLadowanie] = useState(true)
const [error,setError] = useState(false)
useEffect(()=>{
    const getdata = async ()=>{
      try{
      const data = await fetch(`https://playerdb.co/api/player/minecraft/HitchedHorse311`)
      const json = await data.json()
      setFruit(json)
      setLadowanie(false)
      console.log(json)
      }catch(err){
        console.log(err)
        setError(true)
      }
    }
    getdata()
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
