import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { Button, Pagination, TextField, Box } from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";

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
    field: "name",
    headerName: "이름",
    flex: 3,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: true,
    align: "center",
  },
  {
    field: "position",
    headerName: "직책",
    flex: 3,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
    valueFormatter: (params) => {
      return "석사";
    },
  },
  {
    field: "major",
    headerName: "전공",
    flex: 3,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
  {
    field: "email",
    headerName: "이메일",
    sortable: true,
    flex: 3,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
  },
];

// 추후 삭제 예정 - virtualization로 바꿀것
const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
      showLastButton
      showFirstButton
    />
  );
};

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-08-01
 *@description Admin Graduate 페이지
 *             DataGrid 이용
 */

const Graduate = () => {
  const [data, setData] = useState({ position: "", members: [] });

  useEffect(() => {
    axios
      .get(
        "https://8d020d2f-f787-45d5-88de-64d4ae1c030c.mock.pstmn.io/members/graduate"
      )
      .then((response) => {
        setData(response.data);
      });
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
        <Button variant="contained" size="large">
          등록하기
        </Button>
      </Box>
      <DataGrid
        rows={data.members}
        columns={dummycolumns}
        pageSize={15}
        sortingOrder={["desc", "asc"]}
        autoHeight
        autoPageSize
        hideFooterSelectedRowCount
        components={{
          Pagination: CustomPagination,
        }}
        sx={{ cursor: "pointer" }}
        // 자세히 보기 페이지 이동 경로
        // onRowClick={(param) => navigate(`${param.row.id}`)}
      />
    </div>
  );
};

export default Graduate;
