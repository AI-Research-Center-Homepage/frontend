import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

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

//불필요한 Typography 태그의 반복을 막기 위해 별도의 함수 사용
function ProfPrint({ title, info }) {
  return (
    <Typography variant="body2" color="text.secondary" component="div">
      <strong>{title}&nbsp;</strong>
      {info}
    </Typography>
  );
}

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-05-16
 *@description 참여교수 사진, 이름, 전공, 직급, 박사학위, 이메일, 연구실, 전화번호를 보여줌
 */
export default function Professor() {
  return (
    <div>
      <Header />
      <SubHeader main="구성원" sub="참여교수" />

      <Grid container>
        <Grid item xs={12}>
          {prof.map((element) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  display: "flex",
                  boxShadow: 5,
                  my: 1,
                  width: { xs: "80%", md: "40%" },
                  maxHeight: 200,
                }}
              >
                {/* 교수 사진 */}
                <CardMedia
                  component="img"
                  sx={{
                    width: "150px",
                    height: "auto",
                    padding: "1%",
                  }}
                  image={element.img}
                  alt="image"
                />
                {/* 텍스트 정보 */}

                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="body1">
                    <strong>{element.name}</strong>
                  </Typography>
                  <br></br>
                  <ProfPrint title="전공" info={element.major}></ProfPrint>
                  <ProfPrint title="직급" info={element.rank}></ProfPrint>
                  <ProfPrint
                    title="박사학위"
                    info={element.doctoral}
                  ></ProfPrint>
                  <ProfPrint title="이메일" info={element.email}></ProfPrint>
                  <ProfPrint title="연구실" info={element.lab}></ProfPrint>
                  <ProfPrint title="전화번호" info={element.number}></ProfPrint>
                </CardContent>
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
