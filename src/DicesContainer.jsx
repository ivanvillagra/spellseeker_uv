import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export default function DicesContainer({ rolls }) {

    const [exist,setExist] = useState(false);

    useEffect(()=>{
        
            if (rolls != undefined) {
                setExist(true)
            }
         
        
    },[rolls])
 

    return (<>
        {exist ? (<>

            <div className=" bg-black text-center flex-grow ml-5 justify-center items-center  text-white p-2  rounded-md">
                      <div><h1>Total: {rolls.total}</h1></div>
            </div>

            <div className="dices justify-center flex-grow flex flex-wrap">
            {rolls.rolls.map((value, index) => (<div className="w-20 h-20 flex justify-center text-2xl items-center text-center p-2 m-1 bg-slate-950 text-white" key={"dice" + index}><p>{value}</p></div>))}
            </div>

          


        </>
        ) : (<></>)}
    </>)
}