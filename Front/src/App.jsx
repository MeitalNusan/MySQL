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
            </Route>
          </Routes>
        </BrowserRouter>
        
      </QueryClientProvider>
    </div>
  );
}

export default App;
