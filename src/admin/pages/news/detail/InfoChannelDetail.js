import { Box } from "@mui/material";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

import TitleTextField from "../../../components/TitleTextField";
import PostEditor from "../../../components/PostEditor";
import GeneralButton from "../../../components/GeneralButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-29
 *@description 소식통 자세히보기 페이지
 *             DB에 저장된 게시물의 내용을 불러오고
 *             편집 모드로 전환
 */

const InfoChannelDetail = () => {
  const { changeMainText } = useContext(changeMainHeaderContext);

  const navigate = useNavigate();

  /* useRef */
  const editorRef = useRef(); // Editor DOM 선택용

  /* useState */
  const [post, setPost] = useState({
    boardName: "",
    title: "",
    content: "",
    author: "",
    images: [],
  });

  /* function */
  const getPost = () => {
    // 게시글 정보를 받아오는 코드
  };

  // toast-ui-editor 등록 버튼 핸들러
  const handleRegisterButton = () => {
    setPost({
      ...post,
      content: editorRef.current?.getInstance().getMarkdown(),
    });

    console.log(post);

    // post 객체를 전송하는 코드
  };

  const titleChange = (event) => {
    setPost({
      ...post,
      title: event.target.value,
    });
  };

  const checkSignedIn = () => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 소식통 > 상세정보");
    } else {
      navigate("/admin/signin");
    }
  };

  /* useEffect */
  useEffect(() => {
    checkSignedIn();
  }, []);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      {/* title 입력 */}
      <TitleTextField onChange={titleChange} value={post.title} />

      {/* content 입력 */}
      <PostEditor editorRef={editorRef} />

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        <GeneralButton content="취소하기" onClick={() => navigate("./../")} />
        <GeneralButton
          content="삭제하기"
          onClick={() => {}} // 백앤드로 삭제 요청 코드
          sx={{ mx: "1%" }}
        />
        <GeneralButton content="수정하기" onClick={handleRegisterButton} />
      </Box>
    </Box>
  );
};

export default InfoChannelDetail;
