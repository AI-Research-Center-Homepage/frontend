import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box } from "@mui/material";
import { changeMainHeaderContext } from "../../AdminMain";
import GeneralButton from "../../components/GeneralButton";

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

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-03
 *@description Admin Undergraduate 페이지
 *             DataGrid 이용
 */

const Undergraduate = () => {
  const [members, setMembers] = useState({ members: [] });
  const navigate = useNavigate();
  const { changeMainText, changeMainMenu } = useContext(
    changeMainHeaderContext
  );

  const getMembers = async () => {
    try {
      const response = await axios.get("/api/admin/members/undergraduate");
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 학사");
      changeMainMenu(1, 7);
      getMembers();
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
        <GeneralButton
          content="등록하기"
          onClick={() => {
            navigate(`./new`);
          }}
        />
      </Box>
      <div style={{ height: "calc(200px + 40vh)" }}>
        <DataGrid
          rows={members.members}
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

export default Undergraduate;
