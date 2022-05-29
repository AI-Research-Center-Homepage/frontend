import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
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
import Demo from "./pages/research/Demo";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider>
      <BrowserRouter>
        <Routes>
          {/* 홈 */}
          <Route path="/" element={<Home />} />

          {/* 소개 */}
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/organizationchart" element={<OrganizationChart />} />
          <Route path="/history" element={<History />} />
          <Route path="/location" element={<Location />} />

          {/* 연구 */}
          {/* AI연구분야 페이지 추가 예정 */}
          {/* 연구프로젝트 페이지 추가 예정 */}
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/demo" element={<Demo />} />

          {/* 구성원 */}
          {/* 참여교수 페이지 추가 예정 */}
          <Route path="/committee" element={<Committee />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/undergraduate" element={<Undergraduates />} />
          <Route path="/researcher" element={<Researcher />} />

          {/* 소식 */}
          <Route path="/infochannel" element={<InfoChannel />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/article" element={<Article />} />

          {/* 지원하기 */}
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
