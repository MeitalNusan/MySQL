import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Show } from './components/Show';
import { Layout } from './components/Layout';
import { Images } from './components/Images/images';
import { EditImg } from './components/Images/EditImg';
import { Edit } from './components/Edit';
import { ShowImages } from './components/Images/ShowImages';
import { Card } from "./components/Card";
 import { Home } from './components/Home/home';
import { Create } from './components/Create';
import { CrearMellis } from './components/Mellis/crearMellis';
import { DeleteImgHome } from './components/Home/deleteImgHome';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
       
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/show" element={<Show />} />
              <Route path="/img" element={<Images />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/showImg" element={<ShowImages />} />
              <Route path="/editImg/:id" element={<EditImg />} />
              <Route path="/card/:id" element={<Card />} />
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/createMellis" element={<CrearMellis/>} />
              <Route path="/deleteImgHome/:id" element={<DeleteImgHome/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </QueryClientProvider>
    </div>
  );
}

export default App;
