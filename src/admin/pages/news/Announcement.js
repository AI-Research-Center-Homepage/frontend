import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Box } from "@mui/material";
import { changeMainHeaderContext } from "../../AdminMain";

// postman dummydata url: https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/posts/notice

const dummycolumns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: true,
    align: "center",
  },
  {
    field: "title",
    headerName: "제목",
    flex: 4,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: true,
    align: "center",
  },
  {
    field: "author",
    headerName: "작성자",
    flex: 2,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
  {
    field: "viewNum",
    headerName: "조회수",
    flex: 1,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
  {
    field: "createdDate",
    headerName: "작성일시",
    sortable: true,
    flex: 3,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
  {
    field: "modifiedDate",
    headerName: "수정일시",
    sortable: true,
    flex: 3,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
];

/**
 *@author BumKi Lee
 *@date 2022-09-17
 *@description Admin Article
 *             DataGrid 이용
 */

const Announcement = () => {
  const [news, setNews] = useState({ notice: [] });

  const navigate = useNavigate();

  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/posts/notice"
      );
      setNews(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항");
      changeMainMenu(2, 10);
      getNews();
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
      <Box sx={{ display: "flex", mb: "2%", justifyContent: "flex-end" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "right",
            mr: "3%",
          }}
        />
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("./new");
          }}
        >
          등록하기
        </Button>
      </Box>
      <div style={{ height: "calc(200px + 40vh)" }}>
        <DataGrid
          rows={news.notice}
          columns={dummycolumns}
          sortingOrder={["desc", "asc"]}
          hideFooterSelectedRowCount
          sx={{ cursor: "pointer" }}
          onRowClick={(param) => {
            navigate(`${param.row.id}`);
          }}
        />
      </div>
    </div>
  );
};

export default Announcement;
