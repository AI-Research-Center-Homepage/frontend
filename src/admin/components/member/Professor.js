import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { Button, Pagination, TextField, Box } from "@mui/material";

const dummyRows = [
  {
    id: 1,
    name: "나승훈",
    position: "교수",
    major: "인공지능",
    email: "nsh@gmail.com",
  },
  {
    id: 2,
    name: "나훈승",
    position: "교수",
    major: "인공지능",
    email: "nhs@gmail.com",
  },
  {
    id: 3,
    name: "승훈나",
    position: "교수",
    major: "인공지능",
    email: "shn@gmail.com",
  },
  {
    id: 4,
    name: "승나훈",
    position: "교수",
    major: "인공지능",
    email: "snh@gmail.com",
  },
  {
    id: 5,
    name: "훈승나",
    position: "교수",
    major: "인공지능",
    email: "hsn@gmail.com",
  },
];

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

const Professor = () => {
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
        rows={dummyRows}
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
        //onRowClick={() => navigate(`/professor/${dummyRows.id}`)} // 수정 필요!!!
      />
    </div>
  );
};

export default Professor;
