import './App.css';
import { useState,useEffect} from 'react';
import Menu from './components/menu.js';
import Szukaj from './components/szukaj.js';

function App() {
const [fruit,setFruit] = useState([])
const [ladowanie,setLadowanie] = useState(true)
const [error,setError] = useState(false)
const [input,setInput] = useState("")
const [pro,setPro] = useState(false)


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
  const GetOne = async ()=>{
      try{
      const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/${input}`)
      const json = await data.json()
      setFruit(json)
      setLadowanie(false)
      console.log(json)
      }catch(err){
        setError(true)
        console.log(err)
      }
    }
  return (
    <div className='h-screen bg-rose-300'>
    {error && "Wystąpił błąd podczas ładowania danych"}
    {ladowanie?"Ładowanie danych...":(
    <div className="App flex flex-row flex-wrap w-full bg-rose-300">
      <Menu fruit={fruit} setFruit={setFruit} pro={pro} setPro={setPro}/>
      <Szukaj setInput={setInput} GetOne={GetOne}/>
      {fruit.length>1 ? fruit.map((item,idx)=>(
        <div key={idx} className='flex justify-center items-center relative flex-col w-[110px] h-[150px] m-3 border-black border-2 rounded-md'>
          <h1 className='flex font-bold'>{item.name}</h1>
          <p>Kalorie: {item.nutritions.calories}</p>
          <p>Tłuszcz: {item.nutritions.fat}g</p>
          <p>Cukier: {item.nutritions.sugar}g</p>
          {pro?<p>Proteiny: {item.nutritions.protein}g</p>:<></>}
          </div>
      )):
      <div className='flex justify-center items-center relative flex-col w-[110px] h-[130px] m-3 border-black border-2 rounded-md'>
          <h1 className='flex font-bold'>{fruit.name}</h1>
          <p>Kalorie: {fruit.nutritions.calories}</p>
          <p>Tłuszcz: {fruit.nutritions.fat}g</p>
          <p>Cukier: {fruit.nutritions.sugar}g</p>
          {pro?<p>Proteiny: {fruit.nutritions.protein}g</p>:<></>}
          </div>}
    </div>)}
    </div>
  );
}

export default App;
