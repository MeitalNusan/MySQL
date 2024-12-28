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
import PrivateRoute from './Hooks/PrivateRoute';
import { AuthProvider } from './Hooks/AuthContext';

import {Login} from "./login/login"

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <AuthProvider> 
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/* <Route path="/img" element={<Images />} />
              <Route path="/editImg/:id" element={<EditImg />} /> 
               <Route path="/adminDash" element={<AdminDashboard />} /> */}

            
              {/* <Route path="/deleteImgHome/:id" element={<deleteImgHome/>} />
              <Route path="/editHome/:id" element={<EditGral/>} />
              <Route path="/editDescub/:id" element={<EditDescub/>} /> */}

              <Route path="/" element={<Home />} />  
              <Route path="/login" element={<Login />} />
              <Route path="/nosotros" element={<Nosotros/>} />
              <Route path="/adidas" element={<Adidas/>} />
              <Route 
              path="/createMellis"
               element={
                <PrivateRoute> 
                  <CreateMellis/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/create"
               element={
                <PrivateRoute> 
                  <CreateGeneral/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editMellis/:id"
               element={
                <PrivateRoute> 
                  <EditMellis/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createAdidas"
               element={
                <PrivateRoute> 
                  <CreateAdidas/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editAdidas/:id"
               element={
                <PrivateRoute> 
                  <EditAdidas/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createFila"
               element={
                <PrivateRoute> 
                  <CreateFila/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editFila/:id"
               element={
                <PrivateRoute> 
                  <EditFila/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/CreateCarrousel"
               element={
                <PrivateRoute> 
                  <CreateCarrousel/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editCarrousel/:id"
               element={
                <PrivateRoute> 
                  <EditCarrousel/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editAthix/:id"
               element={
                <PrivateRoute> 
                  <EditAthix/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createAthix"
               element={
                <PrivateRoute> 
                  <CreateAthix/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editDiadora/:id"
               element={
                <PrivateRoute> 
                  <EditDiadora/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createDiadora"
               element={
                <PrivateRoute> 
                  <CreateDiadora/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createOlymp"
               element={
                <PrivateRoute> 
                  <CreateOlympikus/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editOlympikus/:id"
               element={
                <PrivateRoute> 
                  <EditOlympikus/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/editNB/:id"
               element={
                <PrivateRoute> 
                  <EditNB/>
                </PrivateRoute>
              } 
              />
              <Route 
              path="/createNB"
               element={
                <PrivateRoute> 
                  <CreateNB/>
                </PrivateRoute>
              } 
              />

               <Route path="/fila" element={<Fila/>} />
               <Route path="/athix" element={<Athix/>} />
               <Route path="/diadora" element={<Diadora/>} />
               <Route path="/Olympikus" element={<Olympikus/>} />
               <Route path="/newb" element={<NewBalance/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
