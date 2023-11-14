import { useEffect, useState } from "react";
import Dice from "./Dice";
import diceRoller from 'dnd5e-dice-roller';

const str = '1d20'

export default function DivD20(){

    const [rolls,setRolls] = useState();

    const [count,setCount] = useState(0);

    useEffect(()=>{
        const rollResult = diceRoller(str);
        setRolls(rollResult);

    },[]);

    const handleClick = () => {
        setRolls();
        setCount(count+1)
        const rollResult = diceRoller(str);
        setRolls(rollResult);
      };



    return(<>
             {rolls?(<>
                <div className="w-full  h-60 flex-col border-b-white border-b-2 flex justify-center items-center bg-black">
                
                <h1 className=" text-xl mb-8 text-white text-5xl font-extrabold"> D20</h1>
                <div onClick={handleClick}  className=' cursor-pointer !text-7xl' >
                    <Dice key={count} size="4x"  rolls={rolls} className=" !text-3xl" ></Dice>
                </div>
                
                <div className="mt-7">
                    <p className=" text-zinc-50 text-3xl">{rolls.total}</p>  
                </div>

                </div>
             </>):(<></>)}
                

         
    </>)
 }
 