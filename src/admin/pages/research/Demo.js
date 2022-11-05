import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { changeMainHeaderContext } from "../../AdminMain";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  CardActionArea,
} from "@mui/material";
import axios from "axios";
import GeneralButton from "../../components/GeneralButton";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-27
 *@description 데모를 모두 조회하고 수정, 삭제, 추가하는 기능이 있음
 */

const Demo = () => {
  // mock api의 데이터를 받는 변수
  const [research, setResearch] = useState({ demos: [] });

  const navigate = useNavigate();

  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  const getResearch = async () => {
    try {
      const response = await axios.get("/api/admin/demo");
      setResearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 데모");
      changeMainMenu(3, 15);
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
      <Box
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
        mt={3}
      >
        {/* 클릭시 등록창으로 넘어가는 버튼 */}
        <GeneralButton
          content="등록하기"
          onClick={() => {
            navigate("./new");
          }}
        />
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {research.demos.map((element) => (
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
              </div>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Demo;
