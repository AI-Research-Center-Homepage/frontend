import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { useMediaQuery, Pagination, CssBaseline } from "@mui/material";

// DataGrid dummydata
const dummyRows = [
  { id: 1, title: "제목1", date: "220404" },
  { id: 2, title: "제목2", date: "220405" },
  { id: 3, title: "제목3", date: "220406" },
  { id: 4, title: "제목4", date: "220407" },
  { id: 5, title: "제목5", date: "220408" },
  { id: 6, title: "제목6", date: "220409" },
  { id: 7, title: "제목7", date: "220410" },
  { id: 8, title: "제목8", date: "220411" },
  { id: 9, title: "제목9", date: "220412" },
  { id: 10, title: "제목10", date: "220413" },
  { id: 11, title: "제목11", date: "220414" },
  { id: 12, title: "제목12", date: "220415" },
  { id: 13, title: "제목13", date: "220416" },
  { id: 14, title: "제목14", date: "220417" },
  { id: 15, title: "제목15", date: "220418" },
  { id: 16, title: "제목16", date: "220419" },
];

// DataGrid 속성 정의
const dummycolumns: GridColDef[] = [
  {
    field: "id",
    headerName: "번호",
    flex: 1,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
    align: "center",
    maxWidth: 100,
    disableSelectionOnClick: true,
  },
  {
    field: "title",
    headerName: "제목",
    flex: 8,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "date",
    headerName: "작성일",
    flex: 1,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
    maxWidth: 100,
  },
];

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-05-08
 *@description 공지사항 하단 page 변환부
 *             Pagination 컴포넌트를 이용하여 구현
 *             숫자를 클릭하여 페이지 이동이 가능하고
 *             한번에 맨 앞, 맨 뒤 페이지로 이동 가능
 *             hook을 이용하여 정보를 받아와 페이지수 결정
 */

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
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-05-08
 *@description 공지사항 페이지
 *             DataGrid를 이용하여 구현
 *             MeduaQuery를 이용하여 1100px이하일 때
 *             작성일이 사라지게 구현
 *             작성일 기준으로 오름, 내림차순 정렬 가능
 */

const Announcement = () => {
  const mediaQuery = useMediaQuery("(min-width: 1100px)");

  return (
    <div>
      <CssBaseline />
      <Header />
      <SubHeader main="소식" sub="공지사항" />

      <div
        style={{
          paddingTop: "3%",
          paddingBottom: "3%",
          paddingLeft: "7.5%",
          paddingRight: "7.5%",
        }}
      >
        <DataGrid
          rows={dummyRows}
          columns={dummycolumns}
          pageSize={15}
          sortingOrder={["desc", "asc"]}
          autoHeight
          autoPageSize
          components={{
            Pagination: CustomPagination,
          }}
          columnVisibilityModel={{
            date: mediaQuery ? true : false,
          }}
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: "date",
                  sort: "desc",
                },
              ],
            },
          }}
          sx={{ cursor: "pointer" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Announcement;
