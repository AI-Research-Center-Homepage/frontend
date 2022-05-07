import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Committee from "./pages/member/Committee";
import Location from "./pages/introduction/Location";
import History from "./pages/introduction/History";



export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/committee" element={<Committee />} />
          <Route path="/location" element={<Location />} />
          <Route path="/history" element={<History />} />

        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
