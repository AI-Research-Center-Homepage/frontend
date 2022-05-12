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
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Collapse,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import jbnu from "../assets/images/jbnu.png";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-05-11
 *@description 상단에 고정적으로 위치하는 Header
 *             로고, Main Navigator, 검색창,
 *             KR/EN 버튼, Side Navigator 포함
 */

const mainMenuItems = [
  {
    key: 1,
    title: "소개",
    contents: [
      { subkey: 6, subcontent: "연구센터소개" },
      { subkey: 7, subcontent: "조직도" },
      { subkey: 8, subcontent: "연혁" },
      { subkey: 9, subcontent: "센터위치" },
    ],
  },
  {
    key: 2,
    title: "연구",
    contents: [
      { subkey: 10, subcontent: "AI연구분야" },
      { subkey: 11, subcontent: "연구프로젝트" },
      { subkey: 12, subcontent: "연구논문" },
      { subkey: 13, subcontent: "연구결과데모" },
    ],
  },
  {
    key: 3,
    title: "구성원",
    contents: [
      { subkey: 14, subcontent: "참여교수" },
      { subkey: 15, subcontent: "운영위원회" },
      { subkey: 16, subcontent: "대학원생" },
      { subkey: 17, subcontent: "학부 연구원생" },
      { subkey: 18, subcontent: "연구원" },
    ],
  },
  {
    key: 4,
    title: "소식",
    contents: [
      { subkey: 19, subcontent: "소식통" },
      { subkey: 20, subcontent: "공지사항" },
      { subkey: 21, subcontent: "언론보도" },
    ],
  },
  {
    key: 5,
    title: "지원하기",
    contents: [{ subkey: 22, subcontent: "지원하기" }],
  },
];

const Header = () => {
  const mainMenuMediaQuery = useMediaQuery("(min-width: 1200px)");

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);
  const [expandedSideMenu, setExpandedSideMenu] = useState(false);

  const handleExpanded = (key) => {
    if (expandedSideMenu === key) {
      setExpandedSideMenu("");
    } else {
      setExpandedSideMenu(key);
    }
  };

  const isShowMainMenu = () => {
    return mainMenuMediaQuery ? "visible" : "hidden";
  };

  const navigate = useNavigate();

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-05-11
   *@description 오른쪽 사이드 메뉴
   *             list를 이용하여 구현
   */

  // 함수화 시켜서 사용하면 transition 기능이 사라짐
  // Why?????

  /* 
  const SideMenu = () => {
    return (
      <>
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

          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#0277BD" }}>
            {mainMenuItems.map(({ key, title, contents }) => (
              <div key={key}>
                <ListItemButton onClick={() => handleExpanded(key)}>
                  <ListItemText primary={title} />
                </ListItemButton>

                <Collapse
                  in={key === expandedSideMenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{ bgcolor: "white" }}
                  >
                    {contents.map(({ subkey, subcontent }) => (
                      <ListItemButton
                        sx={{ pl: 4, color: "black" }}
                        key={subkey}
                      >
                        <ListItemText primary={subcontent} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Card>
      </>
    );
  }; 
  */

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-05-11
   *@description 상단 헤더에서 MainMenu 구성부
   *             onMouse시 collapseMenu가 내려옴
   */

  const MainMenu = () => {
    return (
      <>
        {mainMenuItems.map(({ title, key }) => (
          <Grid item xs={2.4} key={key}>
            <Typography sx={{ fontSize: "20px", color: "black" }}>
              {title}
            </Typography>
          </Grid>
        ))}
      </>
    );
  };

  /**
   *@author Suin-Jeong, suin8@jbnu.ac.kr
   *@date 2022-05-11
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
            >
              {/* SideMenu Collapse */}
              <Card
                sx={{
                  height: "100%",
                  width: "320px",
                  bgcolor: "#0277BD",
                  color: "white",
                  borderRadius: "0",
                }}
              >
                <CardMedia sx={{ ml: "7px", mt: "7px" }}>
                  <IconButton onClick={() => navigate("/")}>
                    <Home sx={{ color: "white" }} />
                  </IconButton>
                </CardMedia>

                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#0277BD" }}>
                  {mainMenuItems.map(({ key, title, contents }) => (
                    <div key={key}>
                      <ListItemButton
                        sx={{ py: 1.5 }}
                        onClick={() => handleExpanded(key)}
                      >
                        <ListItemText primary={title} />
                      </ListItemButton>

                      <Collapse
                        in={key === expandedSideMenu}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          component="div"
                          disablePadding
                          sx={{ bgcolor: "white" }}
                        >
                          {contents.map(({ subkey, subcontent }) => (
                            <ListItemButton
                              sx={{ pl: 4, color: "black" }}
                              key={subkey}
                            >
                              <ListItemText primary={subcontent} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ))}
                </List>
              </Card>
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
              {mainMenuItems.map(({ contents }) => (
                <>
                  <Divider orientation="vertical" />
                  <Grid item xs>
                    <Stack sx={{ height: "100%" }}>
                      {contents.map(({ subcontent }) => (
                        <Button sx={{ height: "20%", color: "black" }}>
                          <Typography variant="subtitle2">
                            {subcontent}
                          </Typography>
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
