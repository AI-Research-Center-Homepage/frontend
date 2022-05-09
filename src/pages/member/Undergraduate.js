import { Grid, Container } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import MemberPost from "../../components/MemberPost";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-05-09
 *@description 학부연구원생들의 정보를 게시글 형식으로 렌더링하는 페이지
 *             데이터베이스와 연동할 학부연구원생 객체 정보는 임시로 dummydata를 사용
 */

const undergraduates = [
  {
    name: "이름1",
    content: "분야 및 상세 설명1",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름2",
    content: "분야 및 상세 설명2",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름3",
    content: "분야 및 상세 설명3",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름4",
    content: "분야 및 상세 설명4",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름5",
    content: "분야 및 상세 설명5",
    image: "https://source.unsplash.com/random",
  },
];

const Undergraduates = () => {
  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="연구원" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={2}>
          {undergraduates.map((undergraduate) => (
            <MemberPost post={undergraduate} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Undergraduates;
