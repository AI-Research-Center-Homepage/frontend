import {
  Card,
  CardMedia,
  Typography,
  Grow,
  Button,
  ButtonGroup,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainImage from "../../assets/images/MainImage.jpg";

// 테마 변경
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
});

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-04-25
 *@description 접속시 보여지는 메인 Home Page
 *             페이지 크기에 따라 글씨와 버튼이
 *             자동으로 커지거나 작아짐
 */

const Home = () => {
  return (
    <div>
      {/* 상단 Main Menu */}
      <Header />
      <div>
        {/* text content */}
        <Grow in="true" timeout={2500}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              position: "absolute",
              justifyContent: "center",
            }}
          >
            <Typography
              align="center"
              sx={{
                width: "50%",
                position: "absolute",
                color: "#000000",
                fontWeight: "bold",
                fontSize: {
                  xl: "3rem",
                  lg: "2.5rem",
                  md: "2rem",
                  sm: "1.5rem",
                },
                textShadow: "4px 4px 4px gray",
                mt: "10%",
              }}
            >
              전북대학교 AI 센터
            </Typography>
          </Box>
        </Grow>

        <ThemeProvider theme={customTheme}>
          {/* menu content  */}
          <Grow in="true" timeout={2500}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                position: "absolute",
                justifyContent: "center",
              }}
            >
              <ButtonGroup
                color="primary"
                variant="text"
                size="Large"
                sx={{
                  width: "35%",
                  height: "45px",
                  bgcolor: "black",
                  mt: "30%",
                }}
              >
                <Button sx={{ width: "21%", ml: "8%", fontWeight: "bold" }}>
                  title 1
                </Button>
                <Button sx={{ width: "21%", fontWeight: "bold" }}>
                  title 2
                </Button>
                <Button sx={{ width: "21%", fontWeight: "bold" }}>
                  title 3
                </Button>
                <Button sx={{ width: "21%", mr: "8%", fontWeight: "bold" }}>
                  title 4
                </Button>
              </ButtonGroup>
            </Box>
          </Grow>
        </ThemeProvider>

        {/* 배경 그림 */}
        <Card sx={{ width: "100%", boxShadow: 0 }}>
          <CardMedia component="img" image={MainImage} />
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
