import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Show } from './components/Show';
import Edit from './components/Edit';
import { Images } from './components/images';
import { ShowImages } from './components/ShowImages';

 
const App = () =>{
  return(
   <div >
      
        <BrowserRouter>
          <Routes>
             <Route path="/show" element={<Show/>}/>  
             <Route path="/img" element={<Images/>}/>  
             <Route path="/edit/:id" element={<Edit/>}/>  
             <Route path="/showimg" element={<ShowImages/>}/>  
          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App