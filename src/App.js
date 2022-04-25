import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
