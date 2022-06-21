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

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import jbnu from "../assets/images/jbnu.png";

const adminHeaderItems = [
  {
    key: 1,
    title: "구성원",
    contents: [
      { subkey: 4, subcontent: "교수", path: "" },
      { subkey: 5, subcontent: "연구원", path: "" },
      { subkey: 6, subcontent: "석사", path: "" },
      { subkey: 7, subcontent: "학사", path: "" },
      { subkey: 8, subcontent: "운영위원회", path: "" },
    ],
  },
  {
    key: 2,
    title: "소식",
    contents: [
      { subkey: 9, subcontent: "소식통", path: "" },
      { subkey: 10, subcontent: "공지사항", path: "" },
      { subkey: 11, subcontent: "언론보도", path: "" },
    ],
  },
  {
    key: 3,
    title: "연구",
    contents: [
      { subkey: 12, subcontent: "연구분야", path: "" },
      { subkey: 13, subcontent: "논문", path: "" },
      { subkey: 14, subcontent: "프로젝트", path: "" },
      { subkey: 15, subcontent: "데모", path: "" },
    ],
  },
];

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-06-21
 *@description 관리자 페이지 왼쪽, 상단에 고정적으로 위치하는 메뉴
 */

const AdminHeader = () => {
  const navigate = useNavigate();

  const [expandedSideMenu, setExpandedSideMenu] = useState(1);
  const [mainText, setMainText] = useState("구성원 > 교수");
  const [isSelected, setIsSelected] = useState(4);

  const handleSelectedColor = (key) => {
    if (isSelected === key) {
      setIsSelected();
    } else {
      setIsSelected(key);
    }
  };

  const handleExpanded = (key) => {
    if (expandedSideMenu === key) {
      setExpandedSideMenu("");
    } else {
      setExpandedSideMenu(key);
    }
  };

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
                    handleExpanded(key);
                  }}
                >
                  <ListItemText primary={title} />
                </ListItemButton>
                <Divider flexItem />

                <Collapse
                  in={key === expandedSideMenu}
                  timeout="auto"
                  unmountOnExit
                >
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
                          handleSelectedColor(subkey);
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
            <Button variant="text" size="large" sx={{ mr: "3%" }}>
              로그아웃
            </Button>
          </Box>
          <Divider flexitem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminHeader;
