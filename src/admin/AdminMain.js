import {
  Grid,
  Box,
  List,
  Divider,
  Card,
  CardMedia,
  Typography,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import jbnu from "../assets/images/jbnu.png";

import Professor from "./pages/member/Professor";
import Researcher from "./pages/member/Researcher";
import Committee from "./pages/member/Committee";
import Graduate from "./pages/member/Graduate";
import Undergraduate from "./pages/member/Undergraduate";
import Announcement from "./pages/news/Announcement";
import Article from "./pages/news/Article";
import InfoChannel from "./pages/news/InfoChannel";
import Demo from "./pages/research/Demo";
import DemoNew from "./pages/research/new/DemoNew";
import DemoDetail from "./pages/research/detail/DemoDetail";
import Project from "./pages/research/Project";
import ResearchField from "./pages/research/ResearchField";
import Thesis from "./pages/research/Thesis";
import ProfessorNew from "./pages/member/new/ProfessorNew";
import ProjectNew from "./pages/research/new/ProjectNew";
import ProjectDetail from "./pages/research/detail/ProjectDetail";
import ThesisNew from "./pages/research/new/ThesisNew";
import ThesisDetail from "./pages/research/detail/ThesisDetail";
import AdminSignIn from "./AdminSignIn";
import ProfessorDetail from "./pages/member/detail/ProfessorDetail";
import ResearcherDetail from "./pages/member/detail/ResearcherDetail";
import ResearchNew from "./pages/member/new/ResearcherNew";
import GraduateNew from "./pages/member/new/GraduateNew";
import GraduateDetail from "./pages/member/detail/GraduateDetail";
import UndergraduateNew from "./pages/member/new/UndergraduateNew";
import UndergraduateDetail from "./pages/member/detail/UndergraduateDetail";
import CommitteeNew from "./pages/member/new/CommitteeNew";
import CommitteeDetail from "./pages/member/detail/CommitteeDetail";
import AdminMainContents from "./AdminMainContents";
import AnnouncementNew from "./pages/news/new/AnnouncementNew";
import AnnouncementDetail from "./pages/news/detail/AnnouncementDetail";
import ArticleNew from "./pages/news/new/ArticleNew";
import ArticleDetail from "./pages/news/detail/ArticleDetail";
import InfochannelNew from "./pages/news/new/InfoChannelNew";
import InfochannelDetail from "./pages/news/detail/InfoChannelDetail";
import GeneralButton from "./components/GeneralButton";

const adminHeaderItems = [
  {
    key: 1,
    title: "구성원",
    contents: [
      { subkey: 4, subcontent: "교수", path: "members/professor" },
      { subkey: 5, subcontent: "연구원", path: "members/researcher" },
      { subkey: 6, subcontent: "석사", path: "members/graduate" },
      { subkey: 7, subcontent: "학사", path: "members/undergraduate" },
      { subkey: 8, subcontent: "운영위원회", path: "members/committee" },
    ],
  },
  {
    key: 2,
    title: "소식",
    contents: [
      { subkey: 9, subcontent: "소식통", path: "news/infochannel" },
      { subkey: 10, subcontent: "공지사항", path: "news/announcement" },
      { subkey: 11, subcontent: "언론보도", path: "news/article" },
    ],
  },
  {
    key: 3,
    title: "연구",
    contents: [
      { subkey: 12, subcontent: "연구분야", path: "research/fields" },
      { subkey: 13, subcontent: "논문", path: "research/thesis" },
      { subkey: 14, subcontent: "프로젝트", path: "research/project" },
      { subkey: 15, subcontent: "데모", path: "research/demo" },
    ],
  },
];

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-09-17
 *@description 관리자 페이지의 메인화면
 *             상단, 좌측 메뉴 포함
 *             중첩 라우팅으로 컴포넌트를 불러오는 방식 이용
 *             Context를 이용하여 상단 MainText 바꾸는 방식 사용
 */

export const changeMainHeaderContext = createContext();

const AdminMain = () => {
  const navigate = useNavigate();

  const [expandedSideMenu, setExpandedSideMenu] = useState();
  const [mainText, setMainText] = useState();
  const [isSelected, setIsSelected] = useState();

  const changeMainText = (text) => {
    setMainText(text);
  };

  const changeMainMenu = (expand, select) => {
    setExpandedSideMenu(expand);
    setIsSelected(select);
  };

  useEffect(() => {
    // 로그인 상태인 경우 Main화면을
    if (window.sessionStorage.getItem("isSignedIn") !== "true") {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        {/* Menu */}
        <Grid item xs={2} sx={{ height: "100vh" }}>
          <List
            disablePadding
            sx={{ height: "100%", borderRight: "1px solid #ececec" }}
          >
            {/* logo */}
            <Card
              sx={{
                boxShadow: "none",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => {
                setMainText("메인화면");
                navigate("/admin/main");
              }}
            >
              <CardMedia
                sx={{ maxWidth: "70px", ml: "15px", cursor: "pointer" }}
                component="img"
                image={jbnu}
                alt="jbnu logo"
              />
            </Card>
            <Divider flexItem sx={{ alignSelf: "stretch", height: "auto" }} />
            {/* Collapse Menu */}
            {adminHeaderItems.map(({ key, title, contents }) => (
              <div key={key}>
                <ListItemButton
                  sx={{ py: 1.5 }}
                  onClick={() => {
                    if (key !== isSelected) setExpandedSideMenu(key);
                  }}
                >
                  <ListItemText primary={title} />
                </ListItemButton>
                <Divider flexItem />

                <Collapse in={key === expandedSideMenu} timeout="auto">
                  <List component="div" disablePadding>
                    {contents.map(({ subkey, subcontent, path }) => (
                      <ListItemButton
                        sx={{
                          pl: 4,
                          color: isSelected === subkey ? "#FFFFFF" : "#000000",
                          bgcolor:
                            isSelected === subkey ? "#0277BD" : "#FFFFFF",
                          "&:hover": {
                            backgroundColor: "#ececec",
                            color: "#000000",
                          },
                        }}
                        key={subkey}
                        onClick={() => {
                          if (subkey !== isSelected) setIsSelected(subkey);
                          navigate(`${path}`);
                        }}
                      >
                        <ListItemText primary={subcontent} />
                      </ListItemButton>
                    ))}
                  </List>
                  <Divider flexItem />
                </Collapse>
              </div>
            ))}
          </List>
        </Grid>
        {/* Content */}
        <Grid item xs={10}>
          {/* Content Header */}
          <Box
            sx={{
              display: "flex",
              minHeight: "70px",
              alignItems: "center",
              pl: "3%",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">{mainText}</Typography>
            <GeneralButton
              content="로그아웃"
              sx={{ mr: "3%" }}
              onClick={() => {
                sessionStorage.removeItem("isSignedIn");
                alert("로그아웃 되었습니다.");
                navigate("/admin/signin");
              }}
            />
          </Box>
          <Divider flexitem />
          {/* MainContent */}
          <changeMainHeaderContext.Provider
            value={{ changeMainText, changeMainMenu }}
          >
            <Routes>
              <Route path="main" element={<AdminMainContents />} />

              {/* LogIn */}
              <Route path="signin" element={<AdminSignIn />} />

              {/* Member */}
              <Route path="members/professor" element={<Professor />} />
              <Route path="members/professor/new" element={<ProfessorNew />} />
              <Route
                path="members/professor/:id"
                element={<ProfessorDetail />}
              />

              <Route path="members/researcher" element={<Researcher />} />
              <Route path="members/researcher/new" element={<ResearchNew />} />
              <Route
                path="members/researcher/:id"
                element={<ResearcherDetail />}
              />

              <Route path="members/graduate" element={<Graduate />} />
              <Route path="members/graduate/new" element={<GraduateNew />} />
              <Route path="members/graduate/:id" element={<GraduateDetail />} />

              <Route path="members/committee" element={<Committee />} />
              <Route path="members/committee/new" element={<CommitteeNew />} />
              <Route
                path="members/committee/:id"
                element={<CommitteeDetail />}
              />

              <Route path="members/undergraduate" element={<Undergraduate />} />
              <Route
                path="members/undergraduate/new"
                element={<UndergraduateNew />}
              />
              <Route
                path="members/undergraduate/:id"
                element={<UndergraduateDetail />}
              />

              {/* News */}
              <Route path="news/announcement" element={<Announcement />} />
              <Route
                path="news/announcement/new"
                element={<AnnouncementNew />}
              />
              <Route
                path="news/announcement/:id"
                element={<AnnouncementDetail />}
              />

              <Route path="news/article" element={<Article />} />
              <Route path="news/article/new" element={<ArticleNew />} />
              <Route path="news/article/:id" element={<ArticleDetail />} />

              <Route path="news/infochannel" element={<InfoChannel />} />
              <Route path="news/infochannel/new" element={<InfochannelNew />} />
              <Route
                path="news/infochannel/:id"
                element={<InfochannelDetail />}
              />

              {/* Research */}
              <Route path="research/demo" element={<Demo />} />
              <Route path="research/demo/new" element={<DemoNew />} />
              <Route path="research/demo/:id" element={<DemoDetail />} />
              <Route path="research/project" element={<Project />} />
              <Route path="research/project/new" element={<ProjectNew />} />
              <Route path="research/project/:id" element={<ProjectDetail />} />
              <Route path="research/fields" element={<ResearchField />} />
              <Route path="research/thesis" element={<Thesis />} />
              <Route path="research/thesis/new" element={<ThesisNew />} />
              <Route path="research/thesis/:id" element={<ThesisDetail />} />
            </Routes>
          </changeMainHeaderContext.Provider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminMain;
