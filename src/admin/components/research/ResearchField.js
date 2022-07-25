import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Field = [
  {
    fieldName: "연구분야1",
    description: "설명1",
  },
  {
    fieldName: "연구분야2",
    description: "설명2",
  },
  {
    fieldName: "연구분야3",
    description: "설명3",
  },
  {
    fieldName: "연구분야4",
    description: "설명4",
  },
];

const ResearchField = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {Field.map((element) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  display: "flex",
                  boxShadow: 5,
                  my: 1,
                  width: { xs: "80%", md: "60%" },
                  maxHeight: 200,
                }}
              >
                {/* 텍스트 정보 */}
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="body1">
                    <strong>{element.fieldName}</strong>
                  </Typography>
                  <br></br>
                  <Typography>{element.description}</Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ResearchField;
