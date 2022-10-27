import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Box,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { changeMainHeaderContext } from "../../AdminMain";
import axios from "axios";
import GeneralButton from "../../components/GeneralButton";

// DataGrid column에 들어가는 요소
const columns = [
  {
    field: "id",
    headerName: "id",
    width: 70,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "title",
    headerName: "title",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "description",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-27
 *@description 프로젝트를 조회하는 메인페이지
 */

export default function Project() {
  const navigate = useNavigate();
  const [research, setResearch] = useState({ projects: [] });
  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  const getResearch = async () => {
    try {
      const response = await axios.get("/api/admin/project");
      setResearch(response);
    } catch (error) {
      console.log(error);
    }
  };

  const dummyProject = {
    projects: [
      {
        fieldName: "인공지능",
        projects: [
          { id: 1, title: "플젝1", description: "설명1" },
          { id: 2, title: "플젝2", description: "설명2" },
        ],
      },
      {
        fieldName: "기계학습",
        projects: [
          { id: 3, title: "플젝3", description: "설명3" },
          { id: 4, title: "플젝4", description: "설명4" },
        ],
      },
    ],
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 프로젝트");
      changeMainMenu(3, 14);
      getResearch();
      setResearch(dummyProject);
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
      >
        {/* 검색창 */}
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "right",
            mr: "3%",
          }}
        />

        {/* 클릭하면 등록창으로 넘어가는 버튼 */}
        <GeneralButton
          content="등록하기"
          onClick={() => {
            navigate("./new");
          }}
          sx={{ height: "100%" }}
        />
      </Box>

      {/* 프로젝트 데이터를 보여주는 DataTable. 각 게시물을 클릭하면 해당 자세히 보기 페이지로 넘어감 */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {research &&
          research.projects.map((data) => (
            <Grid item xs={6}>
              <div style={{ height: 300, width: "95%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      {data.fieldName}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <DataGrid
                  rows={data.projects}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  hideFooterSelectedRowCount
                  autoPageSize
                  onRowClick={(param) => navigate(`${param.row.id}`)}
                />
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
