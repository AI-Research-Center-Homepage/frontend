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
import { useState, useEffect } from "react";

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
 *@date 2022-09-12
 *@description 관리자 페이지의 메인화면
 *             상단, 좌측 메뉴 포함
 *             중첩 라우팅으로 컴포넌트를 불러오는 방식 이용
 */

const AdminMain = () => {
  const navigate = useNavigate();

  const [expandedSideMenu, setExpandedSideMenu] = useState(1);
  const [mainText, setMainText] = useState("구성원 > 교수");
  const [isSelected, setIsSelected] = useState(4);

  const addMainText = (text) => {
    setMainText(mainText + " > " + text);
  };

  const delMainText = () => {
    setMainText(mainText.slice(0, mainText.length - 6));
  };

  const setMainTxt = (text) => {
    console.log(text);
    console.log("1234");
    setMainText(text);

    console.log(mainText);
  };

  useEffect(() => {
    // 첫 접근 시 상단 텍스트를 메인화면으로 표시한다
    if (window.sessionStorage.getItem("mainText") == null) {
      setMainText("메인화면");
    } else {
      setExpandedSideMenu(window.sessionStorage.getItem("expandedSideMenu"));
      setMainText(window.sessionStorage.getItem("mainText"));
      setIsSelected(window.sessionStorage.getItem("isSelected"));
    }

    // 뒤로가기 방지 클릭시 자동으로 admin 메인페이지로 이동
    window.onpopstate = () => {
      navigate("/admin");
    };
  }, []);

  useEffect(() => {
    console.log("바뀜 : " + mainText);
    window.sessionStorage.setItem("expandedSideMenu", expandedSideMenu);
    window.sessionStorage.setItem("mainText", mainText);
    window.sessionStorage.setItem("isSelected", isSelected);
  }, [expandedSideMenu, mainText, isSelected]);

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
              onClick={() => navigate("/admin")}
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
                          setMainText(title + " > " + subcontent);
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
            <Button variant="contained" size="large" sx={{ mr: "3%" }}>
              로그아웃
            </Button>
          </Box>
          <Divider flexitem />

          {/* MainContent */}
          <Routes>
            {/* LogIn */}
            <Route
              path="signin"
              element={<AdminSignIn setMainTxt={setMainTxt} />}
            />

            {/* Member */}
            <Route
              path="members/professor"
              element={<Professor addMainText={addMainText} />}
            />
            <Route
              path="members/professor/new"
              element={<ProfessorNew delMainText={delMainText} />}
            />
            <Route
              path="members/professor/:id"
              element={<ProfessorDetail delMainText={delMainText} />}
            />

            <Route
              path="members/researcher"
              element={<Researcher addMainText={addMainText} />}
            />
            <Route
              path="members/researcher/new"
              element={<ResearchNew delMainText={delMainText} />}
            />
            <Route
              path="members/researcher/:id"
              element={<ResearcherDetail delMainText={delMainText} />}
            />

            <Route
              path="members/graduate"
              element={<Graduate addMainText={addMainText} />}
            />
            <Route
              path="members/graduate/new"
              element={<GraduateNew delMainText={delMainText} />}
            />
            <Route
              path="members/graduate/:id"
              element={<GraduateDetail delMainText={delMainText} />}
            />

            <Route
              path="members/committee"
              element={<Committee addMainText={addMainText} />}
            />
            <Route
              path="members/committee/new"
              element={<CommitteeNew delMainText={delMainText} />}
            />
            <Route
              path="members/committee/:id"
              element={<CommitteeDetail delMainText={delMainText} />}
            />

            <Route
              path="members/undergraduate"
              element={<Undergraduate addMainText={addMainText} />}
            />
            <Route
              path="members/undergraduate/new"
              element={<UndergraduateNew delMainText={delMainText} />}
            />
            <Route
              path="members/undergraduate/:id"
              element={<UndergraduateDetail delMainText={delMainText} />}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminMain;
