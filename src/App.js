import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Professor from "./pages/member/Professor";
import Graduate from "./pages/member/Graduate";
import Thesis from "./pages/research/Thesis";
import Committee from "./pages/member/Committee";
import Location from "./pages/introduction/Location";
import History from "./pages/introduction/History";
import Introduction from "./pages/introduction/Introduction";
import Article from "./pages/news/Article";
import Announcement from "./pages/news/Announcement";
import Apply from "./pages/apply/Apply";
import OrganizationChart from "./pages/introduction/OrganizationChart";
import Researcher from "./pages/member/Researcher";
import Undergraduates from "./pages/member/Undergraduate";
import InfoChannel from "./pages/news/InfoChannel";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/location" element={<Location />} />
          <Route path="/history" element={<History />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/announcement" element={<Announcement />} />
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
