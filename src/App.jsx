import "./styles.css";

//Vistas
import Objetivos from "./Components/Objetivos";
import Appbar from "./Components/Appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alcances from "./Components/Alcances";
import Index from "./Components/Index";
import CapacidadSoftware from "./Components/CapacidadSoftware";
import Tercera from "./Components/Tercera";
import Compatibilidad from "./Components/Compatibilidad";
import MasUrgente from "./Components/MasUrgente";
import Wrapper from "./Components/Wrapper";
//Componentes
export default function App() {
  return (
    <div className="App">
      <Appbar />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/alcances" element={<Alcances />} />
            <Route path="/soft" element={<Tercera />} />
            <Route path="/capsoftware" element={<CapacidadSoftware />} />
            <Route path="/compatibilidad" element={<Compatibilidad />} />
            <Route path="/masurgente" element={<MasUrgente />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}
