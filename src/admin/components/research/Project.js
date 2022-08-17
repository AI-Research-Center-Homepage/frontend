import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
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

const url = "https://a4149427-81af-4b54-9358-9e16682d2eb5.mock.pstmn.io";

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
    field: "description",
    headerName: "description",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

export default function Project() {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios.get(url + "/project").then((response) => {
      setProjectData(response.data.projects);
    });
  }, []);

  return (
    <div>
      <Box
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
        mt={3}
      >
        <Button
          variant="contained"
          sx={{ mr: 3, height: 55 }}
          onClick={() => navigate("./new")}
        >
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
        {projectData &&
          projectData.map((data) => (
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
                  rows={data.projects}
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
}
