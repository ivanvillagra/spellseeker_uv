import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function DicesContainer({ rolls }) {
  const [exist, setExist] = useState(false);
  const [visibleDices, setVisibleDices] = useState(Array(rolls?.rolls.length).fill(false));
  const [date] = useState(new Date());

  useEffect(() => {
    if (rolls) {
      setExist(true);
      // Mostrar todos los dados y girar al mismo tiempo
      setVisibleDices(Array(rolls?.rolls.length).fill(true));
    }
  }, [rolls, exist]); // Agregué exist al arreglo de dependencias para forzar la recreación del componente

  // Manejador de eventos al finalizar la animación
  const handleAnimationEnd = () => {
    // Ocultar los dados después de que la animación termina
    setVisibleDices(Array(rolls?.rolls.length).fill(false));
  };

  return (
    <>
      {exist ? (
        <>
          <div className="bg-black text-center flex-grow ml-5 justify-center items-center text-white p-2 rounded-md">
            <div>
              <h1>Total: {rolls.total}</h1>
            </div>
          </div>

          <div
            onAnimationEnd={handleAnimationEnd}
            key={date.getMilliseconds + rolls.total} // Asigna una nueva clave basada en el total de los rolls
            className="dices justify-center flex-grow flex flex-wrap"
          >
            {rolls.rolls.map((value, index) => (
              <div
                key={"dice" + index}
                className={`w-20 h-20 flex justify-center text-2xl items-center text-center p-2 m-1 bg-slate-950 text-white dice-animation ${visibleDices[index] ? 'dice-visible' : ''}`}
              >
                <p>{value}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
