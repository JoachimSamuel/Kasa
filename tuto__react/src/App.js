import './App.css';
import { Routes, Route} from "react-router-dom";

//Routes
import Home from "./Components/Home/Home";
import FicheLogement from "./Components/Logement/FicheLogement";
import Error from "./Components/Eror/404";
import APropos  from "./Components/A Propos/A propos";



import Navbar from './Components/Header/navbar';
import Footer from './Components/footer/footer';



function App(){
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fiche-logement' element={<FicheLogement/>} />
        <Route path='*' element={<Error />} />
        <Route path='/A-Propos' element={<APropos />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;








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


