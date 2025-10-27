
function Szukaj({setInput,GetOne}){
    
    return(
        <div className="flex flex-col sticky top-[150px] items-center z-10 w-full h-[60px] gap-2 bg-green-600/[100%] pb-2">
            <input className="rounded" onChange={(e)=>{setInput(e.target.value)}}/>
            <button className='bg-orange-200 w-[75px] h-[50px] rounded-lg' onClick={(e)=>(GetOne())}>Szukaj</button>
        </div>
    );
}
export default Szukaj;