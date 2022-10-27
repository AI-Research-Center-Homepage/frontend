import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import { changeMainHeaderContext } from "../../AdminMain";
import axios from "axios";
import GeneralButton from "../../components/GeneralButton";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-27
 *@description 연구분야를 모두 조회하고 수정, 삭제, 추가하는 기능이 있음
 */

const ResearchField = () => {
  // 연구분야, 설명 내용 변경을 위한 변수
  const [description, setDescription] = useState("");
  const [fieldName, setFieldName] = useState("");

  // 연구분야, 설명 내용 변경을 위한 함수
  const descriptionChange = ({ target: { value } }) => setDescription(value);
  const fieldNameChange = ({ target: { value } }) => setFieldName(value);

  const navigate = useNavigate();
  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  // mock api의 데이터를 받는 변수
  const [research, setResearch] = useState({ fields: [] });

  const getResearch = async () => {
    try {
      const response = await axios.get("/api/admin/fields");
      setResearch(response);
    } catch (error) {
      console.log(error);
    }
  };

  const dummyFields = {
    fields: [
      { id: 1, fieldName: "title1", description: "desc1", used: "url1" },
      { id: 2, fieldName: "title2", description: "desc2", used: "url2" },
    ],
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 연구분야");
      changeMainMenu(3, 12);
      getResearch();

      setResearch(dummyFields);
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
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {research.fields.map((element) => (
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
                    width: { xs: "100%", md: "80%" },
                    maxHeight: 200,
                    overflowY: "auto",
                  }}
                >
                  <CardActionArea>
                    {/* 연구분야와 설명을 보여줌 */}
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="body1" multiline>
                        <strong>{element.fieldName}</strong>
                      </Typography>
                      <br></br>
                      <Typography multiline>{element.description}</Typography>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* 새 연구분야를 등록할 수 있는 TextField. 분야 이름을 작성하는 칸과 설명을 작성하는 칸 */}
            <TextField
              id="outlined-multiline-static"
              label="연구분야"
              value={fieldName}
              onChange={fieldNameChange}
              multiline
              rows={2}
              sx={{ mt: 2, mb: 3, width: { md: "25%", xs: "35%" } }}
            />

            <TextField
              id="outlined-multiline-static"
              label="설명"
              value={description}
              onChange={descriptionChange}
              multiline
              rows={2}
              sx={{ mt: 2, mb: 3, ml: 2, width: { md: "55%", xs: "50%" } }}
            />

            <GeneralButton
              content="저장"
              sx={{ height: "100%", mt: 4.5, ml: 1, mb: 3 }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResearchField;
