import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";

import { useEffect, useState } from "react";

// const dummyRows = [
//   { id: 1, title: "데모1" },
//   { id: 2, title: "데모2" },
//   { id: 3, title: "데모3" },
//   { id: 4, title: "데모4" },
//   { id: 5, title: "데모5" },
//   { id: 6, title: "데모6" },
//   { id: 7, title: "데모7" },
//   { id: 8, title: "데모8" },
//   { id: 9, title: "데모9" },
//   { id: 10, title: "데모10" },
//   { id: 11, title: "데모11" },
//   { id: 12, title: "데모12" },
//   { id: 13, title: "데모13" },
//   { id: 14, title: "데모14" },
//   { id: 15, title: "데모15" },
// ];

// DataGrid 속성 정의
const dummycolumns = [
  {
    field: "id",
    headerName: "번호",
    flex: 1,
    headerAlign: "center",
    align: "center",
    maxWidth: 100,
  },
  {
    field: "title",
    headerName: "데모명",
    flex: 8,
    headerAlign: "center",
  },
];

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-06-18
 *@description Demo Page
 */

const Demo = () => {
  const [data, setData] = useState({ demo: [] });

  useEffect(() => {
    axios({
      method: "get",
      url: "https://4051bb99-f161-4f6e-8c33-dd389141803f.mock.pstmn.io/Demo",
      responseType: "json",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
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
          rows={data.demo}
          columns={dummycolumns}
          pageSize={15}
          autoHeight
          autoPageSize
          hideFooter
          disableColumnMenu
          sx={{ cursor: "pointer" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
