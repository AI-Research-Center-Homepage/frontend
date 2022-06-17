import React from "react";
import { useNavigate } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { Box, Divider, Stack, Typography, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { getFullDate } from "../utils/date";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-06-04
 *@description 첨부파일 객체를 인자로 받아 출력하는 함수
 */

const AttachFile = ({ attach }) => {
  return (
    <>
      <Box sx={{ display: "flex", px: "1%" }}>
        <a href={attach.filePath}>
          <AttachFileIcon />
          {attach.fileName}
        </a>
      </Box>
    </>
  );
};

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-06-04
 *@description 게시물 자세히 보기 내용 구현
 */

const NewsPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* 자세히 보기 */}
      <Box sx={{ my: "2%", mx: "7.5%" }}>
        {/* 조회수, 작성일, 수정일 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: "1%",
            pt: "1%",
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ justifyContent: "flex-end" }}
          >
            {post.viewNum && <Typography>조회수: {post.viewNum}</Typography>}
            <Typography>작성일: {getFullDate(post.createdDate)}</Typography>
            <Typography>수정일: {getFullDate(post.modifiedDate)}</Typography>
          </Stack>
        </Box>
        <Divider sx={{ borderBottomWidth: 2, background: "black" }} />

        {/* 제목 */}
        <Box
          sx={{
            px: "1%",
            py: "1%",
            backgroundColor: "#ececec",
          }}
        >
          <Typography variant="h4">{post.title}</Typography>
        </Box>
        <Divider />

        {/* 게시판 내용 */}
        <Box
          sx={{
            px: "1%",
            py: "2%",
          }}
        >
          <Viewer initialValue={post.content} />
        </Box>

        {/* 첨부파일 */}
        {post.attach && (
          <Stack
            spacing={1}
            sx={{ border: "1px solid gray", borderBottom: "0px" }}
          >
            <Typography
              variant="h6"
              sx={{
                px: "1%",
                py: "0.5%",
                backgroundColor: "#ececec",
              }}
            >
              첨부파일
            </Typography>
            {post.attach.map((attach) => (
              <AttachFile key={attach.fileName} attach={attach} />
            ))}
          </Stack>
        )}
        <Divider sx={{ borderBottomWidth: 1, background: "black" }} />

        {/* 목록 버튼 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: "1%",
            pt: "1%",
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            sx={{ color: "black", border: "1px solid black" }}
            variant="outlined"
          >
            <ListAltIcon /> &nbsp; 목록
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NewsPost;
