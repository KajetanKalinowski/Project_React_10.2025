import './App.css';
import { useState,useEffect} from 'react';

function App() {
const [fruit,setFruit] = useState([])
const [ladowanie,setLadowanie] = useState(true)
const [error,setError] = useState(false)
useEffect(()=>{
    const getdata = async ()=>{
      try{
      const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all`)
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
    <>
    {error && "Wystąpił błąd podczas ładowania danych"}
    {ladowanie?"Ładowanie danych...":(
    <div className="App flex flex-row flex-wrap w-full">
      {fruit.map((item,idx)=>(
        <div key={idx} className='flex flex-col w-[50px] h-[50px]'>
          <h1 className='flex text-xs w-[20px] max-w-[20px] h-[20px]'>{item.name}</h1>
          </div>
      ))}
    </div>)}
    </>
  );
}

export default App;
