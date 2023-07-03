import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import FicheLogement from "./Components/Logement/FicheLogement";
import Eror from "./Components/Eror/404";
import APropos  from "./Components/A Propos/A propos";


function App(){
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fiche-logement' element={<FicheLogement/>} />
        <Route path='/eror' element={<Eror />} />
        <Route path='/A-Propos' element={<APropos />} />
      </Routes>
    </div>
  )
}

//function Thumb() {
 
 
  // state (état, données)
  
  //comportements

  //affichage (render)

  //return (
    //<div>
    // <image></image>
    // <p>test</p>
    //</div>
  //)
//}


export default App;
