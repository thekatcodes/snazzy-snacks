import { Route, Routes } from "react-router-dom";

import './App.scss';
import Landing from "./components/Landing";
import Temp from "./components/Temp";

function App() {
  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/temp" element={<Temp />} />
  </Routes>
}

export default App;
