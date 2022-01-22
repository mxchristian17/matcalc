import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import ElementContainer from './Containers/ElementContainer/ElementContainer';
import { GlobalContextProvider } from './Context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <GlobalContextProvider>
        <NavBar />
        <Routes>
          <Route path="/:catId/:elId" element={<ElementContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
