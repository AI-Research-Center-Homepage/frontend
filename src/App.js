import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// User Pages
import Home from "./user/pages/Home";
import Professor from "./user/pages/member/Professor";
import Graduate from "./user/pages/member/Graduate";
import Thesis from "./user/pages/research/Thesis";
import Committee from "./user/pages/member/Committee";
import Location from "./user/pages/introduction/Location";
import History from "./user/pages/introduction/History";
import Introduction from "./user/pages/introduction/Introduction";
import Article from "./user/pages/news/Article";
import Announcement from "./user/pages/news/Announcement";
import Apply from "./user/pages/apply/Apply";
import OrganizationChart from "./user/pages/introduction/OrganizationChart";
import Researcher from "./user/pages/member/Researcher";
import Undergraduates from "./user/pages/member/Undergraduate";
import InfoChannel from "./user/pages/news/InfoChannel";
import Project from "./user/pages/research/Project";
import ResearchField from "./user/pages/research/ResearchField";
import Demo from "./user/pages/research/Demo";
import AnnouncementPost from "./user/pages/news/post/AnnouncementPost";
import ArticlePost from "./user/pages/news/post/ArticlePost";
import InfoChannelPost from "./user/pages/news/post/InfoChannelPost";

// Admin Pages
import AdminMain from "./admin/AdminMain";

export const ArticleContext = createContext();

const App = () => {
  return (
    <ArticleContext.Provider value={{}}>
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
          <Route path="/field" element={<ResearchField />} />
          <Route path="/project" element={<Project />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/demo" element={<Demo />} />

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
          <Route path="/admin/*" element={<AdminMain />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;
