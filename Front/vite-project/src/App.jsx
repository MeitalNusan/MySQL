import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Show } from './components/Show';

 
const App = () =>{
  return(
   <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Show/>}/>  
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App