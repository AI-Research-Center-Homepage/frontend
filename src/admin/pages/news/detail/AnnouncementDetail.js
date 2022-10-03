import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

import TitleTextField from "../../../components/TitleTextField";
import PostEditor from "../../../components/PostEditor";
import GeneralButton from "../../../components/GeneralButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-29
 *@description 공지사항 자세히보기 페이지
 *             DB에 저장된 게시물의 내용을 불러오고
 *             편집 모드로 전환
 */

const AnnouncementDetail = () => {
  const { changeMainText } = useContext(changeMainHeaderContext);

  const navigate = useNavigate();

  /* useRef */
  const editorRef = useRef(); // Editor DOM 선택용
  const fileInput = useRef(null); // 첨부파일 업로드

  /* useState */
  const [post, setPost] = useState({
    boardName: "",
    title: "",
    content: "",
    author: "",
    images: [],
    attaches: [],
  });

  const [attaches, setAttaches] = useState([]);

  /* function */
  const getPost = () => {
    // 게시글 정보를 받아오는 코드
  };

  // toast-ui-editor 등록 버튼 핸들러
  const handleRegisterButton = () => {
    setPost({
      ...post,
      content: editorRef.current?.getInstance().getMarkdown(),
      attaches: attaches,
    });

    console.log(post);

    // post 객체를 전송하는 코드
  };

  const handleFileUploadButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleFileUploadChange = (e) => {
    const newAttach = {
      fileName: e.target.files[0].name,
      filePath: "",
    };

    // 첨부 파일 중복 검사
    if (
      attaches.filter((attach) => attach.fileName === newAttach.fileName)
        .length === 0
    ) {
      setAttaches([...attaches, newAttach]);
    }
  };

  const attachRemove = (fileName) => {
    setAttaches(attaches.filter((attach) => attach.fileName !== fileName));
  };

  const titleChange = (event) => {
    setPost({
      ...post,
      title: event.target.value,
    });
  };

  const checkSignedIn = () => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항 > 상세정보");
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

      {/* 첨부파일 등록 */}
      <Box sx={{ my: "2%", display: "flex" }}>
        {/* 파일 업로드 버튼 */}
        <Box sx={{ width: "10%" }}>
          <GeneralButton
            content="파일 업로드"
            onClick={handleFileUploadButtonClick}
          />
          <input
            type="file"
            ref={fileInput}
            onChange={handleFileUploadChange}
            style={{ display: "none" }}
          />
        </Box>

        {/* 첨부파일 Stack */}
        <Stack
          direction="column"
          sx={{
            ml: "1%",
            width: "90%",
            alignItems: "flex-start",
            display: "flex",
            border: "1px solid #D3D3D3",
            borderRadius: "10px",
          }}
        >
          {attaches.map((attach) => (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* 파일명 */}
              <Typography sx={{ ml: "1%" }}>{attach.fileName}</Typography>

              {/* 삭제버튼 */}
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => attachRemove(attach.fileName)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>

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

export default AnnouncementDetail;
