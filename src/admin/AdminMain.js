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
  Button,
} from "@mui/material";

import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import jbnu from "../assets/images/jbnu.png";

import Professor from "./components/member/Professor";
import Researcher from "./components/member/Researcher";
import Committee from "./components/member/Committee";
import Graduate from "./components/member/Graduate";
import Undergraduate from "./components/member/Undergraduate";
import Announcement from "./components/news/Announcement";
import Article from "./components/news/Article";
import InfoChannel from "./components/news/InfoChannel";
import Demo from "./components/research/Demo";
import DemoNew from "./components/research/research_page/DemoNew";
import DemoDetail from "./components/research/research_page/DemoDetail";
import Project from "./components/research/Project";
import ResearchField from "./components/research/ResearchField";
import Thesis from "./components/research/Thesis";
import ProfessorNew from "./components/member/member_page/ProfessorNew";
import ProjectNew from "./components/research/research_page/ProjectNew";
import ProjectDetail from "./components/research/research_page/ProjectDetail";
import ThesisNew from "./components/research/research_page/ThesisNew";
import ThesisDetail from "./components/research/research_page/ThesisDetail";
import AdminSignIn from "./AdminSignIn";
import ProfessorDetail from "./components/member/member_page/ProfessorDetail";
import ResearcherDetail from "./components/member/member_page/ResearcherDetail";
import ResearchNew from "./components/member/member_page/ResearcherNew";
import GraduateNew from "./components/member/member_page/GraduateNew";
import GraduateDetail from "./components/member/member_page/GraduateDetail";
import UndergraduateNew from "./components/member/member_page/UndergraduateNew";
import UndergraduateDetail from "./components/member/member_page/UndergraduateDetail";
import CommitteeNew from "./components/member/member_page/CommitteeNew";
import CommitteeDetail from "./components/member/member_page/CommitteeDetail";
import AdminMainContents from "./AdminMainContents";

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
      { subkey: 9, subcontent: "소식통", path: "posts/source" },
      { subkey: 10, subcontent: "공지사항", path: "posts/notice" },
      { subkey: 11, subcontent: "언론보도", path: "posts/news" },
    ],
  },
  {
    key: 3,
    title: "연구",
    contents: [
      { subkey: 12, subcontent: "연구분야", path: "fields" },
      { subkey: 13, subcontent: "논문", path: "thesis" },
      { subkey: 14, subcontent: "프로젝트", path: "project" },
      { subkey: 15, subcontent: "데모", path: "demo" },
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

export const changeMainTextContext = createContext();

const AdminMain = () => {
  const navigate = useNavigate();

  const [expandedSideMenu, setExpandedSideMenu] = useState(1);
  const [mainText, setMainText] = useState("메인화면");
  const [isSelected, setIsSelected] = useState(4);

  const changeMainText = (text) => {
    setMainText(text);
  };

  useEffect(() => {
    // 로그인 상태인 경우 Main화면을
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("메인화면");
    } else {
      // 아니라면 로그인화면으로 강제 redirection
      navigate("/admin/signin");
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("expandedSideMenu", expandedSideMenu);
  }, [expandedSideMenu]);

  useEffect(() => {
    window.sessionStorage.setItem("mainText", mainText);
  }, [mainText]);

  useEffect(() => {
    window.sessionStorage.setItem("isSelected", isSelected);
  }, [isSelected]);

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
            <Button
              variant="contained"
              size="large"
              sx={{ mr: "3%" }}
              onClick={() => {
                sessionStorage.removeItem("isSignedIn");
                alert("로그아웃 되었습니다.");
                navigate("/admin/signin");
              }}
            >
              로그아웃
            </Button>
          </Box>
          <Divider flexitem />
          {/* MainContent */}
          <changeMainTextContext.Provider value={{ changeMainText }}>
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
              <Route path="posts/notice" element={<Announcement />} />
              <Route path="posts/news" element={<Article />} />
              <Route path="posts/source" element={<InfoChannel />} />

              {/* Research */}
              <Route path="demo" element={<Demo />} />
              <Route path="demo/new" element={<DemoNew />} />
              <Route path="demo/:id" element={<DemoDetail />} />
              <Route path="project" element={<Project />} />
              <Route path="project/new" element={<ProjectNew />} />
              <Route path="project/:id" element={<ProjectDetail />} />
              <Route path="fields" element={<ResearchField />} />
              <Route path="thesis" element={<Thesis />} />
              <Route path="thesis/new" element={<ThesisNew />} />
              <Route path="thesis/:id" element={<ThesisDetail />} />
            </Routes>
          </changeMainTextContext.Provider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminMain;
