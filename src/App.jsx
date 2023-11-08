import { useEffect, useState } from "react"
import FooterApp from "./FooterApp"
import NavBar from "./NavBar"
import Search from "./Search"
const appName = "Spellseeker 1.0"
const apiEndPoint = "https://www.dnd5eapi.co/api/"
const apiSpellsSection = "spells"
const urlapi = "https://www.dnd5eapi.co"
import axios from 'axios';
import CardsContainer from "./CardsContainer"
import ModalSpellInfo from "./ModalSpellInfo"

function App() {

  const [listSpells,setSpell] = useState([]);
  const[searchListSpells,setSearchListSpells] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [openModalinfo,setOpenmodalInfo] = useState(false);
  const [urlSpellnow,setUrlSpellnow]  = useState("");

  useEffect(()=>{

    axios.get(apiEndPoint+apiSpellsSection).
    then((response)=>{
       setSpell(response.data.results);
       setSearchListSpells(response.data.results);
    })
  },[])
  

  useEffect(()=>{

    setSearchListSpells((searchText.length===0)?listSpells:listSpells.filter(spell => spell.name.toLowerCase().includes(searchText.toLowerCase())));

  },[searchText])


  return (<>
    {(openModalinfo)?<ModalSpellInfo spell={ urlapi + urlSpellnow} setOpenmodalInfo={setOpenmodalInfo}></ModalSpellInfo>:<>
     <div className=" min-h-screen flex flex-col">
     <NavBar appName={appName}></NavBar>
     <main className="flex-grow">
       <Search setSearchText={setSearchText}></Search>
       {searchListSpells.length > 0 ? <CardsContainer setOpenmodalInfo={setOpenmodalInfo} 
       setUrlSpellnow={setUrlSpellnow} listSpells={searchListSpells}/> : <div className=" flex flex-grow justify-center items-center"><h1 className="text-center text-4xl">I dont know this spell :c</h1></div>}

     </main>
     <FooterApp></FooterApp>
   </div>
   </>}
   </>
  )
}

export default App
