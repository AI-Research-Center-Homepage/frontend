import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  Divider,
  useMediaQuery,
  Typography,
  Drawer,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Stack,
  Collapse,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";
import jbnu from "../assets/images/jbnu.png";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-04-13
 *@description 상단에 고정적으로 위치하는 Header
 *             로고, Main Navigator, 검색창,
 *             KR/EN 버튼, Side Navigator 포함
 */

const mainMenuItems = [
  {
    id: 1,
    title: "소개",
    contents: ["연구센터소개", "조직도", "연혁", "센터위치"],
  },
  {
    id: 2,
    title: "연구",
    contents: ["AI연구분야", "연구프로젝트", "연구논문", "연구결과데모"],
  },
  {
    id: 3,
    title: "구성원",
    contents: ["참여교수", "운영위원회", "대학원생", "학부 연구원생", "연구원"],
  },
  {
    id: 4,
    title: "소식",
    contents: ["소식통", "공지사항", "언론보도"],
  },
  {
    id: 5,
    title: "지원하기",
    contents: ["지원하기"],
  },
];

const Header = () => {
  const mainMenuMediaQuery = useMediaQuery("(min-width: 1200px)");

  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isShowMainMenu = () => {
    return mainMenuMediaQuery ? "visible" : "hidden";
  };

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-04-13
   *@description 오른쪽 사이드 메뉴
   *             Accordion을 이용하여 구현
   */

  const SideMenu = () => {
    return (
      <Card
        sx={{
          height: "100%",
          width: "320px",
          bgcolor: "#0277BD",
          color: "white",
          borderRadius: "0",
        }}
      >
        <CardMedia sx={{ ml: "7px", my: "7px" }}>
          <IconButton onClick={() => navigate("/")}>
            <Home sx={{ color: "white" }} />
          </IconButton>
        </CardMedia>
        {mainMenuItems.map((it) => (
          <Accordion
            expanded="true"
            sx={{
              bgcolor: "#0277BD",
              color: "white",
            }}
          >
            <AccordionSummary
              aria-controls={`content${it.title}`}
              id={`content${it.title}-header`}
            >
              <Typography variant="subtitle1">{it.title}</Typography>
            </AccordionSummary>
            {it.contents.map((content) => (
              <AccordionDetails
                sx={{ bgcolor: "white", color: "black", pb: "8px" }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "black",
                    justifyContent: "left",
                  }}
                  onClick={() => {}}
                >
                  {content}
                </Button>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Card>
    );
  };

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-04-13
   *@description 상단 헤더에서 MainMenu 구성부
   *             onMouse시 collapseMenu가 내려옴
   */

  const MainMenu = () => {
    return (
      <>
        {mainMenuItems.map((it) => (
          <Grid item xs={2.4}>
            <Typography sx={{ fontSize: "20px", color: "black" }}>
              {it.title}
            </Typography>
          </Grid>
        ))}
      </>
    );
  };

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-04-13
   *@description Header컴포넌트 전체 구성부
   *             헤더를 Grid로(총 12) 세분화
   *             (1 Logo , 10, 1 SideMenuIcon)
   *             중간 10을 다시 나누었음
   *             (8 MainMenu, 3 Search, 1 KR/EN 버튼)
   */

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          minHeight: 75,
          maxHeight: 75,
        }}
      >
        <Grid container>
          {/* 로고 */}
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
            }}
          >
            <Card
              sx={{
                minWidth: "70px",
                maxWidth: "70px",
                ml: "15px",
                cursor: "pointer",
                boxShadow: "none",
              }}
              onClick={() => navigate("/")}
            >
              <CardMedia component="img" image={jbnu} alt="jbnu logo" />
            </Card>
          </Grid>

          {/* 메뉴, 검색창, 언어 버튼 */}
          <Grid
            container
            xs={10}
            sx={{
              alignItems: "center",
              width: "100%",
              display: "flex",
              visibility: isShowMainMenu,
            }}
          >
            {/* 메인 메뉴*/}
            <Grid
              onMouseEnter={() => setCollapseMenuOpen(true)}
              container
              xs={8}
              sx={{ textAlign: "center" }}
            >
              <MainMenu />
            </Grid>

            {/* 검색창 */}
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                display="flex"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "right",
                  ml: "5%",
                }}
              />
            </Grid>

            {/* 언어 버튼 */}
            <Grid item xs={1}>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
                size="medium"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  ml: "30%",
                }}
              >
                <Button>KR</Button>
                <Button>EN</Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          {/* 사이드 메뉴 */}
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                setSideMenuOpen(true);
              }}
              aria-label="side_MenuIcon"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                ml: "10%",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={sideMenuOpen}
              onClose={() => setSideMenuOpen(false)}
              onOpen={() => {}}
            >
              <SideMenu />
            </Drawer>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* collapse 메뉴 */}
      <Collapse in={collapseMenuOpen} timeout={500}>
        <Grid
          container
          sx={{
            display: "flex",
            height: "200px",
            zIndex: "5",
            bgcolor: "#ececec",
          }}
          onMouseLeave={() => setCollapseMenuOpen(false)}
        >
          <Grid item xs={1} />
          <Grid container xs={10}>
            <Grid container xs={8}>
              {mainMenuItems.map((it) => (
                <>
                  <Divider orientation="vertical" />
                  <Grid item xs>
                    <Stack sx={{ height: "100%" }}>
                      {it.contents.map((content) => (
                        <Button sx={{ height: "20%", color: "black" }}>
                          <Typography variant="subtitle2">{content}</Typography>
                        </Button>
                      ))}
                    </Stack>
                  </Grid>
                </>
              ))}
            </Grid>
            <Divider orientation="vertical" />
          </Grid>
        </Grid>
        <Divider />
      </Collapse>
    </div>
  );
};

export default Header;
