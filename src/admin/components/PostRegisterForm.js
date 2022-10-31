import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TitleTextField from "./TitleTextField";
import PostEditor from "./PostEditor";
import GeneralButton from "./GeneralButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-30
 *@description 게시물 등록하기, 자세히 보기 페이지 양식
 */

const PostRegisterForm = ({ postData, postType, pageType }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const editorRef = useRef(); // Editor DOM 선택용

  const fileInput = useRef(null); // 첨부파일 업로드

  const [post, setPost] = useState({
    boardName: "",
    title: "",
    content: "",
    author: "관리자",
    imageList: [],
    attaches: [],
  });

  const [attaches, setAttaches] = useState([]);

  const titleChange = (event) => {
    setPost({
      ...post,
      title: event.target.value,
    });
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

  /* 게시물 등록, 수정, 삭제 기능 */

  // post 정보 등록 요청 함수
  const postPost = async () => {
    const formData = new FormData();
    formData.append(
      "postDto",
      new Blob([JSON.stringify(post)], { type: "application/json" })
    );

    try {
      const response = await axios.post(`/api/admin/posts/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // post 정보 수정 요청 함수
  const putPost = async () => {
    try {
      const response = await axios.put(`/api/admin/posts/${id}`, post);
    } catch (error) {
      console.log(error);
    }
  };

  // post 정보 탈퇴 요청 함수
  const deletePost = async () => {
    try {
      const response = await axios.delete(`/api/admin/posts/?postId=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    setPost({
      ...post,
      content: editorRef.current?.getInstance().getMarkdown(),
    });

    console.log(post);

    postPost();
  };

  // 수정 버튼 핸들러
  const handleModifyButton = () => {
    putPost();
  };

  // 탈퇴 버튼 핸들러
  const handleWithdrawalButton = () => {
    deletePost();
  };

  // mount
  useEffect(() => {
    setPost(postData);
  }, []);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      {/* title 입력 */}
      <TitleTextField onChange={titleChange} value={post.title} />

      {/* content 입력 */}
      <PostEditor editorRef={editorRef} />

      {/* 첨부파일 등록 */}
      {postType === "notice" && (
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
      )}

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        {pageType === "new" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
              sx={{ mr: "1%" }}
            />
            <GeneralButton content="등록하기" onClick={handleRegisterButton} />
          </>
        )}

        {pageType === "detail" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
            />
            <GeneralButton
              content="탈퇴하기"
              onClick={handleWithdrawalButton}
              sx={{ mx: "1%" }}
            />
            <GeneralButton content="수정하기" onClick={handleModifyButton} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default PostRegisterForm;
