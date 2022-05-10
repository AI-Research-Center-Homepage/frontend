import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

// 참여교수 데이터
const prof = [
  {
    name: "김토토",
    major: "컴퓨터공학",
    rank: "조교수",
    doctoral: "인공지능",
    email: "cheetah@jbnu.ac.kr",
    lab: "101호",
    number: "010-1111-1111",
    img: "https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "치타리",
    major: "컴퓨터공학",
    rank: "부교수",
    doctoral: "인공지능",
    email: "cheetahLee@jbnu.ac.kr",
    lab: "202호",
    number: "010-1111-1111",
    img: "https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "무민",
    major: "컴퓨터공학",
    rank: "정교수",
    doctoral: "인공지능",
    email: "moomin@jbnu.ac.kr",
    lab: "203호",
    number: "010-1111-1111",
    img: "https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "에펠탑",
    major: "컴퓨터공학",
    rank: "조교수",
    doctoral: "인공지능",
    email: "paris@jbnu.ac.kr",
    lab: "101호",
    number: "010-1111-1111",
    img: "https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "냉면",
    major: "컴퓨터공학",
    rank: "조교수",
    doctoral: "인공지능",
    email: "good@jbnu.ac.kr",
    lab: "301호",
    number: "010-1111-1111",
    img: "https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-05-05
 *@description 참여교수 사진, 이름, 전공, 직급, 박사학위, 이메일, 연구실, 전화번호를 보여줌
 */
export default function Prof() {
  return (
    <div>
      <Header />
      <SubHeader main="구성원" sub="참여교수" />
      {prof.map((element) => (
        <Card
          sx={{
            display: "flex",
            width: "50%",
            marginTop: "1%",
            marginBottom: "1%",
            marginLeft: "25%",
          }}
        >
          {/* 교수 사진 */}
          <CardMedia
            component="img"
            sx={{ width: "20%", height: "20%", padding: "2%" }}
            image={element.img}
            alt="image"
          />
          {/* 텍스트 정보 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="subtitle2">
                <strong>{element.name}</strong>
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>전공&nbsp;</strong> {element.major}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>직급&nbsp;</strong> {element.rank}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>박사학위&nbsp;</strong> {element.doctoral}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>이메일&nbsp;</strong> {element.email}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>연구실&nbsp;</strong> {element.lab}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                <strong>전화번호&nbsp;</strong> {element.number}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
      <Footer />
    </div>
  );
}
