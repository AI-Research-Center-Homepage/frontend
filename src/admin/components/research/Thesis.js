import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Grid,
  TextField,
  Box,
  Button,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://1f2433c6-aac1-40f4-869a-4ef9f0ae270a.mock.pstmn.io";

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
    field: "journal",
    headerName: "journal",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "publishDate",
    headerName: "publishDate",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];

export default function Thesis() {
  const [thesisData, setThesisData] = useState({ theses: [] });

  useEffect(() => {
    axios.get(url + "/thesis").then((response) => {
      setThesisData(response.data);
    });
  }, []);

  let List = [];
  List = thesisData.theses.map((data) => data.fieldName);

  const rows = [];
  thesisData.theses.forEach((ele) => {
    ele.theses.forEach((element) => {
      rows.push(element);
    });
  });

  return (
    <div>
      <Box
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
        mt={3}
      >
        <Button variant="contained" sx={{ mr: 3, height: 55 }}>
          등록하기
        </Button>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          sx={{ mr: 7, width: "30%" }}
        />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {thesisData &&
          thesisData.theses.map((data) => (
            <Grid item xs={6}>
              <div style={{ height: 300, width: "90%", margin: 40 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      {data.fieldName}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <DataGrid
                  // rows={firstField.theses}
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  hideFooterSelectedRowCount
                  autoPageSize
                  // onRowClick={(param) => navigate(`${param.row.id}`)}
                />
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
