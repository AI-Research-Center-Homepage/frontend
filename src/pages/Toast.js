import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import { Typography, Container, Box, IconButton, Divider } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";

import { useLocation, useNavigate } from "react-router-dom";

const dummy = {
  title: "Toast UI Test1 Title",
  content: " 컨텐츠 입니다.<br>컨텐츠컨텐츠컨텐츠 <h1>큰글씨 h1</h1>",
  viewNum: 20,
  createdDate: "2022-01-01'T'01:01:01",
  modifiedDate: "2022-01-02'T'01:01:01",
  attach: [
    {
      fileName: "test1",
      filePath: "test1/test1",
    },
  ],
};

const Toast = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SubHeader main={location.state.main} sub={location.state.sub} />

      {/* Whole Box */}
      <Container
        maxWidth="false"
        disableGutters
        sx={{ width: "70%", my: "10%" }}
      >
        <Typography
          align="right"
          variant="body2"
          sx={{ fontSize: "0.8rem", mb: "5%" }}
        >
          {dummy.viewNum && "조회수: " + dummy.viewNum + " | "}
          {"작성일: " +
            dummy.createdDate.slice(0, 10) +
            " | " +
            "수정일: " +
            dummy.modifiedDate.slice(0, 10)}
        </Typography>

        {/* Title Box */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "70px",
            alignItems: "center",
            bgcolor: "#ECECEC",
          }}
        >
          <Typography align="left" variant="h4" sx={{ ml: "3%" }}>
            {dummy.title}
          </Typography>
        </Box>

        {/* Content Box */}
        <Box
          sx={{
            width: "100%",
            mb: "5%",
          }}
        >
          <Viewer initialValue={dummy.content} height="auto"></Viewer>
        </Box>

        <Divider flexItem sx={{ my: "5%" }} />

        {/* Attachments Box */}
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            bgcolor: "#ECECEC",
            border: "1px solid #ECECEC",
          }}
        >
          <Typography align="left" variant="subtitle2" sx={{ ml: "3%" }}>
            첨부파일
          </Typography>
          <Typography
            align="left"
            variant="subtitle2"
            sx={{ pl: "3%", bgcolor: "#FFFFFF" }}
          >
            첨부내용
          </Typography>
        </Box>

        {/* Go to list */}
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
          sx={{ float: "right" }}
        >
          <ViewListIcon />
        </IconButton>
      </Container>
      <Footer />
    </>
  );
};
export default Toast;
