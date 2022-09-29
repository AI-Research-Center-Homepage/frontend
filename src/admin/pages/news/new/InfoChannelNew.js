import { Box } from "@mui/material";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

import TitleTextField from "../../../components/TitleTextField";
import PostEditor from "../../../components/PostEditor";
import CommonButton from "../../../components/CommonButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-29
 *@description 소식통 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const InfoChannelNew = () => {
  const { changeMainText } = useContext(changeMainHeaderContext);

  const navigate = useNavigate();

  /* useRef */
  const editorRef = useRef(); // Editor DOM 선택용

  /* useState */
  const [post, setPost] = useState({
    boardName: "infochannel",
    title: "",
    content: "",
    author: "관리자",
    images: [],
  });

  /* function */
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

  const signedInCheck = () => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 소식통 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  };

  /* useEffect */
  useEffect(() => {
    signedInCheck();
  }, []);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      {/* title 입력 */}
      <TitleTextField onChange={titleChange} value={post.title} />

      {/* content 입력 */}
      <PostEditor editorRef={editorRef} />

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        <CommonButton
          content="취소하기"
          onClick={() => navigate("./../")}
          sx={{ mx: "1%" }}
        />
        <CommonButton content="등록하기" onClick={handleRegisterButton} />
      </Box>
    </Box>
  );
};

export default InfoChannelNew;
