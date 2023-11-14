/* eslint-disable react/prop-types */
export default function Search({setSearchText}){

    return(<>
    
    <div className="w-full mb-4 h-60 flex flex-col justify-center items-center font-serif bg-black">
        <h2 className=" text-white text-2xl xl:text-7xl  mb-6">Search for your spell, player</h2>
        <input type="text" placeholder="Acid splash" className="border-r-8  focus:outline-black border-black w:1/2 xl:w-2/5 h-10 text-center text-2xl  rounded-full p-4 text-zinc-950"
        onChange={(e)=>{setSearchText(e.target.value)}}
        onKeyDown={(e)=>{
            const regex = /^[a-zA-Z\b]+$/; 
            if (!regex.test(e.key)) {
              e.preventDefault();
            }
        }}></input>
    </div>

    </>)

}