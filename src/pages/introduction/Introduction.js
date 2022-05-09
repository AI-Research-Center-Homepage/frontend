import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Container, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import pdfFile from "../../assets/intro_cclab.pdf";

// pdf.js worker 활성화
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Introduction = () => {
  // 전체 페이지
  const [numPages, setNumPages] = useState(null);

  // 현재 페이지
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Header />

      <SubHeader main="소개" sub="소개" />

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          my: 8,
        }}
      >
        <Typography variant="h5">
          전북대학교 AI 인공지능 연구실 홈페이지
        </Typography>

        {/* pdf */}
        <Box sx={{ border: "1px solid", mt: 8 }}>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </Box>

        {/* page move btn */}
        <Box sx={{ display: "flex", mt: 2 }}>
          {/* 이전 페이지 btn */}
          <ArrowCircleLeftIcon
            onClick={() =>
              pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            }
            sx={{ cursor: "pointer" }}
          />

          <Typography sx={{ mx: 1 }}>
            Page {pageNumber} of {numPages}
          </Typography>

          {/* 다음 페이지 btn */}
          <ArrowCircleRightIcon
            onClick={() =>
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Introduction;
