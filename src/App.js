import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Graduate from "./pages/member/Graduate";
import Thesis from "./pages/research/Thesis";
import Committee from "./pages/member/Committee";
import Location from "./pages/introduction/Location";
import History from "./pages/introduction/History";
import Apply from "./pages/apply/Apply";
import OrganizationChart from "./pages/introduction/OrganizationChart";
import Researcher from "./pages/member/Researcher";
import Undergraduates from "./pages/member/Undergraduate";
import InfoChannel from "./pages/notice/InfoChannel";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/location" element={<Location />} />
          <Route path="/history" element={<History />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/organizationchart" element={<OrganizationChart />} />
          <Route path="/researcher" element={<Researcher />} />
          <Route path="/undergraduate" element={<Undergraduates />} />
          <Route path="/infochannel" element={<InfoChannel />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
