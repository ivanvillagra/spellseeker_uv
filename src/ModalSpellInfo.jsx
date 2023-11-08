import axios from "axios";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function ModalSpellInfo({ spell, setOpenmodalInfo }) {
  const [spellInfo, setSpellInfo] = useState(null);
  console.log(spell);

  useEffect(() => {
    axios.get(spell).then((response) => {
      setSpellInfo(response.data);
    });
  }, []); 

  return (
    <>
      <div className="z-10 bg-opacity-100 h-screen justify-center  items-center w-screen flex bg-black">
      {spellInfo ? (<>
        <div className="w-5/6 md:4/6 xl:3/6 h-auto bg-white rounded-3xl p-4 font-extrabold">
          <div className="flex justify-end">
            <button className=" w-24 rounded-full p-2 flex text-xl   h-9 w-9 cursor-pointer  justify-center items-center bg-black text-white"
                onClick={() => setOpenmodalInfo(false)}> X
            </button>
          </div>
         

          <div className="flex justify-between flex-col   mb-4 font-extrabold">
            <div className="flex w-full breakw justify-center mr-1" style={{wordBreak: "break-word"}}>
              <p className=" text-2xl md:text-5xl">{spellInfo.name}</p>
          </div>
           
          </div>
          
          <div className=" border-t-8 mt-1.5 border-t-black border-b-8 h-auto max-h-72 overflow-auto border-b-black">
             <p className=" text-2xl mt-3 mb-3 font-extrabold">Description:</p>
             <p className=" p-2 mb-4">{spellInfo.desc}</p>
         </div>
         
         <div className="mt-5">

            <div className="flex w-auto justify-center flex-grow flex-wrap  font-extrabold">
              <p  className="m-2">Level: {spellInfo.level}</p>
              <p className="m-2">Range: {spellInfo.range}</p>
              <p  className="m-2">Duration: {spellInfo.duration}</p>
              <p  className="m-2">Casting time: {spellInfo.casting_time}</p>
            </div>
        
         </div>
         
        </div>
          </>) 
          : (<></>)}
      </div>
    </>
  );
}