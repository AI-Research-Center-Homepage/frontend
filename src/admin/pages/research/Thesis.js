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
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "title",
    headerName: "title",
    flex: 2,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "journal",
    headerName: "journal",
    flex: 2,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "publishDate",
    headerName: "publishDate",
    flex: 1.5,
    headerAlign: "center",
    align: "center",
  },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-27
 *@description 분야별 논문 리스트를 보여주는 논문 메인페이지
 */

const Thesis = () => {
  const navigate = useNavigate();
  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  // 리턴값이 fields라 일단 이걸로 받음
  const [research, setResearch] = useState({ fields: [] });

  const getResearch = async () => {
    try {
      const response = await axios.get("/api/admin/thesis");
      setResearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 논문");
      changeMainMenu(3, 13);
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
      >
        {/* 검색창 */}
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          sx={{ width: "30%", mr: "3%" }}
        />

        {/* 클릭시 등록하는 창으로 넘어감 */}
        <GeneralButton
          content="등록하기"
          onClick={() => {
            navigate("./new");
          }}
        />
      </Box>

      {/* 논문 데이터를 보여주는 DataTable. 각 게시물을 클릭하면 해당 자세히 보기 페이지로 넘어감 */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {research.fields &&
          research.fields.map((data) => (
            <Grid item xs={12} sx={{ mb: "8%" }}>
              <div style={{ height: 300, width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      {data.fieldName}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <DataGrid
                  rows={data.theses}
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
};

export default Thesis;
