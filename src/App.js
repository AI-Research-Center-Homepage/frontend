import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Location from "./pages/introduction/Location";
import History from "./pages/introduction/History";
import Article from "./pages/notice/Article";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/history" element={<History />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
