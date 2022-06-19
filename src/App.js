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
import Project from "./pages/research/Project";
import ResearchField from "./pages/research/ResearchField";
import Demo from "./pages/research/Demo";
import AnnouncementPost from "./pages/news/view_post/AnnouncementPost";
import ArticlePost from "./pages/news/view_post/ArticlePost";
import InfoChannelPost from "./pages/news/view_post/InfoChannelPost";
import AdminHeader from "./components/AdminHeader";

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
          <Route path="/researchfield" element={<ResearchField />} />
          <Route path="/project" element={<Project />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/researchfield" element={<ResearchField />} />

          {/* 구성원 */}
          <Route path="/professor" element={<Professor />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/undergraduate" element={<Undergraduates />} />
          <Route path="/researcher" element={<Researcher />} />

          {/* 소식 */}
          <Route path="/infochannel" element={<InfoChannel />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/article" element={<Article />} />

          {/* 소식 - 자세히 보기 */}
          <Route path="/infochannel/:id" element={<InfoChannelPost />} />
          <Route path="/announcement/:id" element={<AnnouncementPost />} />
          <Route path="/article/:id" element={<ArticlePost />} />

          {/* 지원하기 */}
          <Route path="/apply" element={<Apply />} />

          {/* 관리자 */}
          {/* 추후 admin 페이지에 통합 필요 구현을 위해 잠시 이용 */}
          <Route path="/admin" element={<AdminHeader />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
