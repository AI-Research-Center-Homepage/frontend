import {
  Typography,
  Container,
  Box,
  Divider,
  createTheme,
  ThemeProvider,
  Slide,
} from "@mui/material";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

import HomeIcon from "@mui/icons-material/Home";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallEndIcon from "@mui/icons-material/CallEnd";
import EmailIcon from "@mui/icons-material/Email";

import { useEffect, useRef, useState } from "react";

const customTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
        },
      },
    },
  },
});

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-05-01
 *@description 센터 위치 소개 페이지
 *             Kakao Map API 이용
 *             찾아오는 길, 주소, 호실
 *             전화번호, 이메일 포함
 */

const Location = () => {
  // Kakao Map API 사용부분
  const containerRef = useRef(null);

  const [titleAppear, setTitleAppear] = useState(false);
  const [contentAppear, setContentAppear] = useState(false);

  const listener = (e) => {
    if (window.scrollY > 200) {
      setTitleAppear(true);
    }
    if (window.scrollY > 400) {
      setContentAppear(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(
        35.84601774006665,
        127.13446069670242
      ),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    let markerPosition = new window.kakao.maps.LatLng(
      35.84601774006665,
      127.13446069670242
    );

    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
    map.setCenter(markerPosition);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div>
      <Header />
      <SubHeader main="소개" sub="센터위치" />

      {/* 상단 위치 */}
      <Container sx={{ display: "flex", justifyContent: "center", my: "2%" }}>
        <Typography
          align="center"
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
        >
          위치 :&nbsp;
        </Typography>

        <Typography
          align="center"
          variant="subtitle1"
          sx={{ color: "text.secondary" }}
        >
          전북 전주시 덕진구 백제대로 567, 전북대학교 공과대학 7호관
        </Typography>
      </Container>

      {/* 카카오맵 출력부 */}
      <div
        className="Map"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          id="map"
          style={{
            width: "60%",
            height: "400px",
            marginBottom: "2%",
            borderRadius: "30px",
          }}
        ></div>
      </div>

      {/* 상세 주소, 오시는 길 제목 */}
      <div ref={containerRef} style={{ overflow: "hidden" }}>
        <Slide in={titleAppear} timeout={1000} container={containerRef.current}>
          <Container
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
              my: "2%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <HomeIcon />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", pl: "3px" }}
              >
                주소
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex" }}>
              <AddLocationIcon />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", pl: "3px" }}
              >
                오시는 길
              </Typography>
            </Box>
          </Container>
        </Slide>
      </div>

      {/* 상세 주소, 오시는 길 상세내용 */}
      <ThemeProvider theme={customTheme}>
        <Container
          sx={{
            display: "flex",
            width: "80%",
            mb: "5%",
          }}
        >
          <Slide in={contentAppear} direction="right" timeout={1500}>
            <Box
              sx={{
                width: "50%",
                p: "3%",
                color: "text.secondary",
                borderTop: "0.3px solid",
                borderBottom: "0.3px solid",
              }}
            >
              <Typography>
                <b>
                  전북 전주시 덕진구 백제대로 567, 전북대학교 공과대학 7호관
                </b>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                <ul>
                  <li>교수실: 612호</li>
                  <li>행정실: 201호</li>
                  <li>학생연구실: 602호, 603호, 503호</li>
                </ul>
              </Typography>
            </Box>
          </Slide>

          <Slide in={contentAppear} direction="left" timeout={1500}>
            <Box
              sx={{
                width: "50%",
                p: "3%",
                color: "text.secondary",
                borderTop: "0.3px solid",
                borderBottom: "0.3px solid",
              }}
            >
              <Typography>
                전북대학교 AI연구실은 <b>전북대학교 공과대학 7호관</b>에
                위치하고 있습니다. 인근에는 글로벌인재관, 사범대학부설고등학교,
                공과대학6호관 등이 위치하고 있습니다.
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                버스 이용시 '전북대국제교류어학원'에서 하차하시면 됩니다.
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                자가용 이용시 7호관 앞에 주차장이 마련되어 있습니다.
              </Typography>
            </Box>
          </Slide>
        </Container>
      </ThemeProvider>

      {/* 문의 - 전화번호, 이메일주소 */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          문의
        </Typography>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "400px",
            height: "40px",
            bgcolor: "#0277BD",
            color: "#FFFFFF",
            mt: "1%",
            mb: "4%",
            borderRadius: "20px",
          }}
        >
          <CallEndIcon />
          <Typography>&nbsp;670-272-2722&nbsp;</Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mx: "2%", bgcolor: "#FFFFFF" }}
          />

          <EmailIcon />
          <Typography>&nbsp;jbnuAI@jbnu.ac.kr</Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Location;
