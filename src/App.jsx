import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Redes from "./Redes";
import Lpbd from "./Lpbd";
import Relatorios from "./Relatorios";
import Sobre from "./Sobre";
import NotFound from "./NotFound";
import Menu from "./Menu";
import Media from "./Media";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/redes" element={<Redes/>}/>
        <Route exact path="/lpbd" element={<Lpbd/>}/>
        <Route exact path="/relatorios" element={<Relatorios/>}/>
        <Route exact path="/sobre" element={<Sobre/>}/>
        <Route exact path="/media" element={<Media/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
