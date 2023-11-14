import { useEffect, useState } from "react";
import Dice from "./Dice";

/* eslint-disable react/prop-types */
export default function DicesContainer({ rolls }) {
  const [exist, setExist] = useState(false);
  const [renderCounter, setRenderCounter] = useState(0);

  useEffect(() => {
    if (rolls) {
      setExist(true);   
      setRenderCounter((prevCounter) => prevCounter + 1); 

    }
  }, [rolls, exist]); 

  return (
    <>
      {exist ? (
        <>
          <div className="bg-black text-center w-full ml-5 justify-center items-center  text-white p-2 rounded-md">
            <div>
              <h1>Total: {rolls.total}</h1>
            </div>
          </div>

          <div
            key={renderCounter}
            className="dices max-h-24  overflow-auto justify-center flex-grow flex flex-wrap"
          >
            {rolls.rolls.map((value, index) => (
             <Dice value={value} size="1x"  key={"dice" + index} rollStr = {rolls.rollStr}></Dice>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
