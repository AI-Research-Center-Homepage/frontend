import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
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

const rows = [
  { id: 1, title: "논문1", journal: "나승훈", publishDate: 20190101 },
  {
    id: 2,
    title: "논문2",
    journal: "나승훈 나승훈 나승훈",
    publishDate: 20200218,
  },
  {
    id: 3,
    title: "논문3",
    journal: "나승훈 나승훈 나승훈 나승훈",
    publishDate: 20220330,
  },
  { id: 4, title: "논문1", journal: "나승훈", publishDate: 20190101 },
  { id: 5, title: "논문1", journal: "나승훈", publishDate: 20190101 },
];

function DataGridPrint(props) {
  return (
    <Grid item xs={6}>
      <div style={{ height: 300, width: "90%", margin: 30 }}>
        <DataGrid
          rows={props}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Grid>
  );
}

export default function Thesis() {
  const [thesisData, setThesisData] = useState({ theses: [] });

  useEffect(() => {
    axios.get(url + "/thesis").then((response) => {
      setThesisData(response.data);
    });
  }, []);

  let List = [];
  List = thesisData.theses.map((data) => data.fieldName);

  const firstField = thesisData.theses[0];
  const secondField = thesisData.theses[1];
  const thirdField = thesisData.theses[2];
  const fourthField = thesisData.theses[3];

  return (
    // <div>
    //   {firstField.theses.map((list) => (
    //     <h1>{list.title}</h1>
    //   ))}
    // </div>

    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <div style={{ height: 300, width: "90%", margin: 40 }}>
          <DataGrid
            // rows={firstField?.theses}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // onRowClick={(param) => navigate(`${param.row.id}`)}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ height: 300, width: "90%", margin: 30 }}>
          <DataGrid
            // rows={secondField?.theses}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ height: 300, width: "90%", margin: 30 }}>
          <DataGrid
            // rows={thirdField?.theses}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ height: 300, width: "90%", margin: 30 }}>
          <DataGrid
            // rows={fourthField?.theses}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Grid>
    </Grid>
  );
}
