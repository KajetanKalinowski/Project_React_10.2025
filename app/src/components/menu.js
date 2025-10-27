function Menu({fruit,setFruit,setPro,pro}){
    
    const sortAZ = () => {
  const sorted = [...fruit].sort((a, b) => a.name.localeCompare(b.name));
  setFruit(sorted);
};

const sortZA = () => {
  const sorted = [...fruit].sort((a, b) => b.name.localeCompare(a.name));
 setFruit(sorted);
};
    return(
    <div className="flex flex-col z-10 sticky top-0 items-center w-full h-[150px] gap-2 bg-green-600 pb-2">
        <p className="w-full">Menu</p>
        <div className="flex gap-3">
        <button className='bg-orange-200 w-[75px] h-[50px] rounded-lg' onClick={sortAZ}>Sortuj A-Z</button>
        <button className='bg-orange-200 w-[75px] h-[50px] rounded-lg' onClick={sortZA}>Sortuj Z-A</button>
        </div>
        {pro==false?<button className='bg-orange-200 w-[75px] h-[50px] rounded-lg' onClick={(e)=>(setPro(true))}>Wyświetl proteiny</button>:
        <button className='bg-orange-200 w-[75px] h-[50px] rounded-lg' onClick={(e)=>(setPro(false))}>Ukryj proteiny</button>}
    </div>
    );
}
export default Menu;