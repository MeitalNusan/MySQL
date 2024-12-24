import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/home';
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from './components/Layout';
import { Images } from './components/Images/images';
import { EditImg } from './components/Images/EditImg';
import { EditGral } from './components/fotosGeneral/EditGral';
import { EditDescub } from './components/getImgs/EditDescubrir';
import { CreateGeneral } from './components/fotosGeneral/CreateGral';
import { CreateMellis } from './components/FotosMellis/createMellis';
import { Nosotros } from './Nosotros/nosotros'; 
import { EditMellis } from './components/FotosMellis/EditMellis';
import { Adidas } from './Marcas/Adidas/Adidas';
import { CreateAdidas } from './Marcas/Adidas/createAdidas';
import { EditAdidas } from './Marcas/Adidas/EditAdidas';
import { Fila } from './Marcas/Fila/Fila';
import { CreateFila } from './Marcas/Fila/CreateFila';
import { EditFila } from './Marcas/Fila/EditFila';
import { CreateCarrousel } from './components/fotosCarrousel/createCarrousel';
import { EditCarrousel } from './components/fotosCarrousel/EditCarrousel';
import { Athix } from './Marcas/Athix/Athix';
import { EditAthix } from './Marcas/Athix/EditAthix';
import { CreateAthix } from './Marcas/Athix/createAthix';
import { Diadora } from './Marcas/Diadora/Diadora';
import { EditDiadora } from './Marcas/Diadora/editDiadora';
import { CreateDiadora } from './Marcas/Diadora/createDiadora';
import { Olympikus } from './Marcas/Olympikus/Olympikus';
import { CreateOlympikus } from './Marcas/Olympikus/createOlympik';
import { EditOlympikus } from './Marcas/Olympikus/editOlympikus';
import { NewBalance } from './Marcas/Newbalance/NewBalance';
import { EditNB } from './Marcas/Newbalance/EditNB';
import { CreateNB } from './Marcas/Newbalance/CreateNB';


const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
       
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/img" element={<Images />} />
              <Route path="/editImg/:id" element={<EditImg />} />
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateGeneral/>} />
              <Route path="/createMellis" element={<CreateMellis/>} />            
              <Route path="/deleteImgHome/:id" element={<deleteImgHome/>} />
              <Route path="/editHome/:id" element={<EditGral/>} />
              <Route path="/editDescub/:id" element={<EditDescub/>} />
              <Route path="/editMellis/:id" element={<EditMellis/>} />
              <Route path="/nosotros" element={<Nosotros/>} />
              <Route path="/adidas" element={<Adidas/>} />
              <Route path="/createAdidas" element={<CreateAdidas/>} />
              <Route path="/editAdidas/:id" element={<EditAdidas/>} />
              <Route path="/fila" element={<Fila/>} />
              <Route path="/createFila" element={<CreateFila/>} />
              <Route path="/editFila/:id" element={<EditFila/>} />
              <Route path="/CreateCarrousel" element={<CreateCarrousel/>} />
              <Route path="/editCarrousel/:id" element={<EditCarrousel/>} />
              <Route path="/athix" element={<Athix/>} />
              <Route path="/editAthix/:id" element={<EditAthix/>} />
              <Route path="/createAthix" element={<CreateAthix/>} />
              <Route path="/diadora" element={<Diadora/>} />
              <Route path="/editDiadora/:id" element={<EditDiadora/>} />
              <Route path="/createDiadora" element={<CreateDiadora/>} />
              <Route path="/Olympikus" element={<Olympikus/>} />
              <Route path="/createOlymp" element={<CreateOlympikus/>} />
              <Route path="/editOlympikus/:id" element={<EditOlympikus/>} />
              <Route path="/newb" element={<NewBalance/>} />
              <Route path="/editNB/:id" element={<EditNB/>} />
              <Route path="/createNB" element={<CreateNB/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </QueryClientProvider>
    </div>
  );
}

export default App;
