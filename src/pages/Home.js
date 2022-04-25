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
import MainImage from "../assets/images/MainImage.jpg";

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

const Home = () => {
  return (
    <div>
      <Header />
      <article>
        <Grow in="true" timeout={2500}>
          <Typography
            sx={{
              width: "100%",
              position: "absolute",
              color: "#000000",
              fontSize: "50px",
              fontWeight: "bold",
              textShadow: "4px 4px 4px gray",
              textAlign: "center",
              mt: "10%",
            }}
          >
            전북대학교 AI 센터
          </Typography>
        </Grow>

        <ThemeProvider theme={customTheme}>
          <Grow in="true" timeout={2500}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                position: "absolute",
                justifyContent: "center",
              }}
            >
              <ButtonGroup
                color="primary"
                variant="text"
                size="large"
                sx={{
                  width: "480px",
                  height: "50px",
                  bgcolor: "black",
                  mt: "30%",
                }}
              >
                <Button sx={{ width: "100px", ml: "40px", fontWeight: "bold" }}>
                  title 1
                </Button>
                <Button sx={{ width: "100px", fontWeight: "bold" }}>
                  title 2
                </Button>
                <Button sx={{ width: "100px", fontWeight: "bold" }}>
                  title 3
                </Button>
                <Button sx={{ width: "100px", mr: "40px", fontWeight: "bold" }}>
                  title 4
                </Button>
              </ButtonGroup>
            </Box>
          </Grow>
        </ThemeProvider>

        <Card sx={{ width: "100%", bgcolor: "white" }}>
          <CardMedia component="img" height="100%" image={MainImage} />
        </Card>
      </article>
      <Footer />
    </div>
  );
};

export default Home;
