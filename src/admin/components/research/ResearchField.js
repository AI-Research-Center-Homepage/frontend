import * as React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
  Box,
  TextField,
  CardActionArea,
} from "@mui/material";
import axios from "axios";

// mock api URL
const url = "https://f87d90da-75da-46d6-8ba4-9b4325601a9e.mock.pstmn.io";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-02
 *@description 연구분야를 모두 조회하고 수정, 삭제, 추가하는 기능이 있음
 */

const ResearchField = () => {
  // mock api의 데이터를 받는 변수
  const [fieldData, setFieldData] = useState([]);

  useEffect(() => {
    axios.get(url + "/fields").then((response) => {
      setFieldData(response.data.fields);
    });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {fieldData.map((element) => (
            <Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    boxShadow: 5,
                    my: 1,
                    width: { xs: "70%", md: "60%" },
                    maxHeight: 200,
                    overflowY: "auto",
                  }}
                >
                  <CardActionArea>
                    {/* 텍스트 정보 */}
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="body1" multiline>
                        <strong>{element.fieldName}</strong>
                      </Typography>
                      <br></br>
                      <Typography multiline>{element.description}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Stack spacing={2} direction="column" sx={{ my: 3, ml: 1 }}>
                  <Button variant="contained">수정</Button>
                  <Button variant="outlined">삭제</Button>
                </Stack>
              </div>
            </Box>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="연구분야"
              multiline
              rows={2}
              sx={{ mt: 2, mb: 3, width: { md: "15%", xs: "25%" } }}
            />
            <TextField
              id="outlined-multiline-static"
              label="설명"
              multiline
              rows={2}
              sx={{ mt: 2, mb: 3, ml: 2, width: { md: "45%", xs: "40%" } }}
            />
            <Button
              variant="contained"
              sx={{ height: "100%", mt: 4.5, ml: 1, mb: 3 }}
            >
              저장
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResearchField;
