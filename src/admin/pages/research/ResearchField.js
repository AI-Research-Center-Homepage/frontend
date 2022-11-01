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
  // 수정할 연구분야 id값 가지는 state
  const [changeId, setChangeId] = useState(-1);
  // 수정 or 신규등록의 변경 상태를 가지는 state
  const [mode, setMode] = useState("new");
  // 연구분야, 설명 내용 변경을 위한 state
  const [fieldChange, setFieldChange] = useState({
    fieldName: "",
    description: "",
  });

  const navigate = useNavigate();

  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  // mock api의 데이터를 받는 변수
  const [research, setResearch] = useState({ fields: [] });

  // 연구분야, 설명 내용 변경을 위한 함수
  const handleChangeInput = (e) => {
    setFieldChange({
      ...fieldChange,
      [e.target.name]: e.target.value,
    });
  };

  // 연구분야 전체 값을 가져오는 GET 요청
  const getResearch = async () => {
    try {
      const response = await axios.get("/api/admin/fields");
      setResearch(response.data);
      setFieldChange({ fieldName: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  // 연구분야 신규등록 POST 요청
  const requestPost = async () => {
    if (!checkValidation()) return;
    try {
      const response = await axios.post("/api/admin/fields", fieldChange);
      alert("성공적으로 등록되었습니다!");
      getResearch();
    } catch (error) {
      console.log(error);
    }
  };

  // 연구분야 삭제 DELETE 요청
  const requestDelete = async (e) => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    try {
      const response = await axios.delete(
        `/api/admin/fields?fieldId=${e.target.name}`
      );
      alert("정상적으로 삭제되었습니다!");
      getResearch();
    } catch (error) {
      console.log(error);
    }
  };

  // 연구분야 변경 PUT 요청
  const requestPut = async () => {
    if (!checkValidation()) return;
    try {
      const response = await axios.put(
        `/api/admin/fields?fieldId=${changeId}`,
        fieldChange
      );
      alert("정상적으로 수정되었습니다!");
      getResearch();
      setMode("new");
      setChangeId(-1);
    } catch (error) {
      console.log(error);
    }
  };

  // 수정 버튼을 눌렀을 때 변경할 분야의 id값과 컨텐츠를 변경 state에 저장
  const changeField = (e) => {
    for (let i = 0; i < research.fields.length; i++) {
      if (research.fields[i].id === parseInt(e.target.name)) {
        setFieldChange({
          fieldName: research.fields[i].fieldName,
          description: research.fields[i].description,
        });
        document.getElementsByName("fieldName")[0].focus();
        setMode("change");
        setChangeId(e.target.name);
        break;
      }
    }
  };

  // 저장버튼을 눌렀을 때 상태에 따라 변경 or 신규등록 실행
  const handleSaveButton = () => {
    console.log(mode, changeId);
    if (mode === "new") requestPost();
    else if (mode === "change") requestPut();
  };

  // 변경 or 신규등록 시 빈 값 확인
  const checkValidation = () => {
    if (fieldChange.fieldName === "") {
      alert("연구분야를 입력해주세요");
      document.getElementById("fieldName").focus();
      return false;
    } else if (fieldChange.description === "") {
      alert("설명을 입력해주세요");
      document.getElementById("description").focus();
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 연구분야");
      changeMainMenu(3, 12);
      getResearch();
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
            <Box key={element.id}>
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
                  <Button
                    name={element.id}
                    variant="contained"
                    onClick={changeField}
                  >
                    수정
                  </Button>
                  <Button
                    name={element.id}
                    variant="outlined"
                    onClick={requestDelete}
                  >
                    삭제
                  </Button>
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
              label="연구분야"
              value={fieldChange.fieldName}
              onChange={handleChangeInput}
              multiline
              rows={2}
              name="fieldName"
              sx={{ mt: 2, mb: 3, width: { md: "25%", xs: "35%" } }}
            />

            <TextField
              label="설명"
              value={fieldChange.description}
              onChange={handleChangeInput}
              multiline
              rows={2}
              name="description"
              sx={{ mt: 2, mb: 3, ml: 2, width: { md: "55%", xs: "50%" } }}
            />

            <GeneralButton
              content="저장"
              sx={{ height: "100%", mt: 4.5, ml: 1, mb: 3 }}
              onClick={handleSaveButton}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResearchField;
