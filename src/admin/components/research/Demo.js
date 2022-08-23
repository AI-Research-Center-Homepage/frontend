import * as React from "react";
import { useNavigate } from "react-router-dom";
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
const url = "https://7fe4e807-7f98-44a0-8eff-03534b5964f9.mock.pstmn.io";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-13
 *@description 데모를 모두 조회하고 수정, 삭제, 추가하는 기능이 있음
 */

const Demo = () => {
  // mock api의 데이터를 받는 변수
  const [demoData, setDemoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url + "/research/demo").then((response) => {
      setDemoData(response.data.demos);
    });
  }, []);

  return (
    <div>
      <Box
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
        mt={3}
      >
        {/* 클릭시 등록창으로 넘어가는 버튼 */}
        <Button
          variant="contained"
          sx={{ mr: 3, height: 55 }}
          onClick={() => navigate("./new")}
        >
          등록하기
        </Button>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          sx={{ mr: 7, width: "30%" }}
        />
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {demoData.map((element) => (
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
                    {/* 데모 제목, url 정보 */}
                    <CardContent
                      sx={{ flex: "1 0 auto" }}
                      onClick={() => navigate(`${element.id}`)}
                    >
                      <Typography component="div" variant="body1" multiline>
                        <strong>{element.title}</strong>
                      </Typography>
                      <br></br>
                      <Typography multiline>{element.description}</Typography>
                      <Button href={element.url} variant="text" color="primary">
                        {element.url}
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>

                {/* 수정, 삭제 버튼 */}
                <Stack
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ ml: 3 }}
                >
                  <Button variant="contained">수정</Button>
                  <Button variant="outlined">삭제</Button>
                </Stack>
              </div>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Demo;
