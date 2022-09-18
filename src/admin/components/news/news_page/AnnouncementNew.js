import { TextField, Button, Grid } from "@mui/material";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-19
 *@description 공지사항 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const AnnouncementNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 소식통 > 등록하기");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  const [post, setPost] = useState({
    boardName: "",
    title: "",
    content: "",
    author: "",
    images: [],
    admission: "",
    attach: [],
  });

  const titleChange = (event) => {
    setPost((cur) => {
      let newTitle = { ...cur };
      newTitle.title = event.target.value;
      return newTitle;
    });
  };
  const contentChange = (event) => {
    setPost((cur) => {
      let newContent = { ...cur };
      newContent.content = event.target.value;
      return newContent;
    });
  };

  return (
    <div>
      {/* <form onSubmit={Submit}> */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={10}
      >
        {/* 분야, 제목, 내용, 요약, 참여자를 추가하는 부분 */}
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}></Grid>
      </Grid>

      {/* 취소, 등록버튼. 취소 버튼을 누르면 이전 페이지로 이동함 */}
      <Grid container justifyContent="flex-end" alignItems="center" my={5}>
        <Grid item></Grid>
      </Grid>
      {/* </form> */}
    </div>
  );
};

export default AnnouncementNew;
