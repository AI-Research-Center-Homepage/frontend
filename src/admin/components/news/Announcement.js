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
 *@author BumKi Lee
 *@date 2022-08-02
 *@description Admin Article
 *             DataGrid 이용
 */

const Announcement = () => {
  const [data, setData] = useState({ position: "", notice: [] });

  useEffect(() => {
    axios({
      method: "get",
      url: "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/posts/notice",
      responseType: "json",
    }).then((response) => {
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
        rows={data.notice}
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

export default Announcement;
