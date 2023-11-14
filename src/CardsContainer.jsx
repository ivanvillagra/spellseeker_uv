/* eslint-disable react/prop-types */

import Card from "./card";

export default function CardsContainer({listSpells,setOpenmodalInfo,setUrlSpellnow}){

    return(<>
    <div className="cardsContainer h-90  flex  flex-row flex-wrap w-full pt-5 pb-5 bg-slate-500 justify-center">
    {listSpells.map((spell,index) => (
                  <Card key={index} spell={spell} setOpenmodalInfo={setOpenmodalInfo} setUrlSpellnow={setUrlSpellnow}></Card>
           ))}
    </div>
    </>)
}

