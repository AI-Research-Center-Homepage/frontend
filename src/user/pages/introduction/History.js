import * as React from "react";

import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import { Typography, Box } from "@mui/material";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-04-28
 *@description Timeline component를 사용하여 구현
 */

const dotColor = "#3c94ce";
const dateColor = "black";
const contentColor = "gray";
const defaultMargin = 3;

const theme = createTheme({
  components: {
    MuiTimelineConnector: {
      styleOverrides: {
        root: sx({
          height: "100%",
          position: "absolute",
        }),
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: sx({
          bgcolor: dotColor,
          zIndex: "1",
          borderWidth: "1px",
        }),
      },
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: sx({
          fontSize: "1.5rem",
          fontWeight: "bold",
          pt: 0,
          color: dotColor,
        }),
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "date" },
          style: {
            color: dateColor,
          },
        },
        {
          props: { variant: "content" },
          style: {
            color: contentColor,
          },
        },
      ],
    },
  },
});

export default function History() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader main="소개" sub="연혁" />
      <ThemeProvider theme={theme}>
        <Timeline position="alternate" sx={{ py: 8 }}>
          {/* 2021 */}
          <TimelineItem>
            <TimelineOppositeContent>2021'</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {/* event 1 */}
              <Box display="flex" sx={{ mb: defaultMargin }}>
                <Typography variant="date" sx={{ mr: defaultMargin }}>
                  01. 24.
                </Typography>
                <Typography variant="content">
                  GC녹십자-목암연구소와 산학협력 협약체결 (AIIS 멤버십 가입)
                </Typography>
              </Box>

              {/* event 2 */}
              <Box display="flex" sx={{ mb: defaultMargin }}>
                <Typography variant="date" sx={{ mr: defaultMargin }}>
                  02. 22.
                </Typography>
                <Typography variant="content">제1차 운영위원회 개최</Typography>
              </Box>

              {/* event 3 */}
              <Box display="flex" sx={{ mb: defaultMargin }}>
                <Typography variant="date" sx={{ mr: defaultMargin }}>
                  03. 21.
                </Typography>
                <Typography variant="content">
                  해동첨단공학관(가칭) 건립 기공식 개최
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* 2022 */}
          <TimelineItem>
            <TimelineOppositeContent>2022'</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {/* event 1 */}
              <Box
                display="flex"
                sx={{ justifyContent: "flex-end", mb: defaultMargin }}
              >
                <Typography variant="content">
                  초대 산학협력센터장(함종민 산학협력중점교원) 임명
                </Typography>
                <Typography variant="date" sx={{ ml: defaultMargin }}>
                  01. 01.
                </Typography>
              </Box>

              {/* event 2 */}
              <Box
                display="flex"
                sx={{ justifyContent: "flex-end", mb: defaultMargin }}
              >
                <Typography variant="content">
                  AI연구원-산업자원부-K패션산업협회 업무협약 체결
                </Typography>
                <Typography variant="date" sx={{ ml: defaultMargin }}>
                  02. 03.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ThemeProvider>
      <Footer />
    </React.Fragment>
  );
}
