/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function Card({spell,setOpenmodalInfo,setUrlSpellnow}){
    return(<>
        <div className=" card cursor-pointer text-center text-2xl md:text-xl  hover:bg-slate-900 p-4 m-1 w-3/4 sm:w-2/4 md:w-60 lg:w-1/6 h-20 bg-black text-white font-serif flex justify-center items-center rounded"
       onClick= {()=>{setOpenmodalInfo(true);
        setUrlSpellnow(spell.url);
       }}>
            <h2 className=" text-white">{spell.name}</h2>
        </div>
        </>);
}