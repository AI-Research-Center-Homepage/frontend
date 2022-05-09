import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Thesis from "./pages/research/Thesis";
import Committee from "./pages/member/Committee";
import Location from "./pages/introduction/Location";
import History from "./pages/introduction/History";
import Undergraduates from "./pages/member/Undergraduate";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/location" element={<Location />} />
          <Route path="/history" element={<History />} />
          <Route path="/undergraduate" element={<Undergraduates />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
