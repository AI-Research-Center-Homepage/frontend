import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

import TitleTextField from "../../../components/TitleTextField";
import PostEditor from "../../../components/PostEditor";
import CommonButton from "../../../components/CommonButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-29
 *@description 공지사항 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const AnnouncementNew = () => {
  const { changeMainText } = useContext(changeMainHeaderContext);

  const navigate = useNavigate();

  /* useRef */
  const editorRef = useRef(); // Editor DOM 선택용
  const fileInput = useRef(null); // 첨부파일 업로드

  /* useState */
  const [post, setPost] = useState({
    boardName: "announcement",
    title: "",
    content: "",
    author: "관리자",
    images: [],
    attaches: [],
  });

  const [attaches, setAttaches] = useState([]);

  /* function */
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

  const signedInCheck = () => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항 > 신규등록");
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

      {/* 첨부파일 등록 */}
      <Box sx={{ my: "2%", display: "flex" }}>
        {/* 파일 업로드 버튼 */}
        <Box sx={{ width: "10%" }}>
          <CommonButton
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

export default AnnouncementNew;