import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import axios from "axios";

import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { useMediaQuery, Pagination, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

// DataGrid 속성 정의
const dummycolumns = [
  {
    field: "id",
    headerName: "번호",
    flex: 1,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
    align: "center",
    maxWidth: 100,
  },
  {
    field: "title",
    headerName: "제목",
    flex: 7,
    disableColumnMenu: true,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "createdDate",
    headerName: "작성일",
    flex: 1.5,
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    align: "center",
    maxWidth: 100,
    valueFormatter: (params) => {
      return params.value.slice(0, 10);
    },
  },
  {
    field: "viewNum",
    headerName: "조회수",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    headerAlign: "center",
    align: "center",
    maxWidth: 100,
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

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-02
 *@description 공지사항 페이지
 *             DataGrid를 이용하여 구현
 *             MeduaQuery를 이용하여 1100px이하일 때
 *             작성일이 사라지게 구현
 *             작성일 기준으로 오름, 내림차순 정렬 가능
 */

const Announcement = () => {
  const [data, setData] = useState({ notice: [] });

  useEffect(() => {
    axios({
      method: "get",
      //url: "https://4051bb99-f161-4f6e-8c33-dd389141803f.mock.pstmn.io/Announcement",
      url: "/api/notice",
      responseType: "json",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  const mediaQuery = useMediaQuery("(min-width: 1100px)");

  const navigate = useNavigate();

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
          onRowClick={(param) => navigate(`${param.row.id}`)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Announcement;
