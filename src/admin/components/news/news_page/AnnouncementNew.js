import { TextField, Button, Grid, Box, Typography, Stack } from "@mui/material";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { changeMainHeaderContext } from "../../../AdminMain";
import TitleTextField from "../../TitleTextField";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-19
 *@description 공지사항 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const AnnouncementNew = () => {
  const navigate = useNavigate();
  const editorRef = useRef(); // Editor DOM 선택용
  const fileInput = useRef(null); // 첨부파일 업로드
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [post, setPost] = useState({
    boardName: "",
    title: "",
    content: "",
    author: "",
    images: [],
  });

  const [attaches, setAttaches] = useState([]);

  // toast-ui-editor 등록 버튼 핸들러
  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    const newAttach = {
      fileName: e.target.files[0].name,
      filePath: "",
    };
    setAttaches([...attaches, newAttach]);
  };

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

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 소식통 > 등록하기");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingLeft: "7.5%",
        paddingRight: "7.5%",
      }}
    >
      {/* title 입력 */}
      <TitleTextField onChange={titleChange} value={post.title} />

      {/* content 입력 */}
      <Editor
        ref={editorRef} // DOM 선택용 useRef
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="800px" // 에디터 창 높이
        initialEditType="wysiwyg" //
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        useCommandShortcut={false} // 키보드 입력 컨트롤 방지
      ></Editor>

      {/* 첨부파일 등록 */}
      <Box sx={{ my: "2%", display: "flex" }}>
        <Button variant="contained" size="large" onClick={handleButtonClick}>
          파일 업로드
        </Button>
        <input
          type="file"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mx: "2%" }}
        >
          {attaches.map((attach) => (
            <Typography>{attach.fileName}</Typography>
          ))}
        </Stack>
      </Box>

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        <Button
          sx={{ mx: "1%" }}
          variant="contained"
          size="large"
          onClick={() => navigate("./../")}
        >
          취소하기
        </Button>
        <Button variant="contained" size="large" onClick={handleRegisterButton}>
          등록하기
        </Button>
      </Box>
    </div>
  );
};

export default AnnouncementNew;
