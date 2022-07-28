import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
  Box,
  TextField,
} from '@mui/material';

const Field = [
  {
    fieldName: '연구분야1',
    description: '설명1',
  },
  {
    fieldName: '연구분야2',
    description: '설명2',
  },
  {
    fieldName: '연구분야3',
    description: '설명3',
  },
  {
    fieldName: '연구분야4',
    description: '설명4',
  },
  {
    fieldName: '연구분야5',
    description: '설명5',
  },
];

const ResearchField = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {Field.map((element) => (
            <Box>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    display: 'flex',
                    boxShadow: 5,
                    my: 1,
                    width: { xs: '70%', md: '60%' },
                    maxHeight: 200,
                  }}
                >
                  {/* 텍스트 정보 */}
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="body1">
                      <strong>{element.fieldName}</strong>
                    </Typography>
                    <br></br>
                    <Typography>{element.description}</Typography>
                  </CardContent>
                </Card>
                <Stack spacing={2} direction="column" sx={{ my: 3, ml: 1 }}>
                  <Button variant="contained">수정</Button>
                  <Button variant="outlined">삭제</Button>
                </Stack>
              </div>
            </Box>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              id="outlined-multiline-static"
              label="연구분야"
              multiline
              rows={2}
              sx={{ mt: 2, width: { md: '15%', xs: '25%' } }}
            />
            <TextField
              id="outlined-multiline-static"
              label="설명"
              multiline
              rows={2}
              sx={{ mt: 2, ml: 2, width: { md: '45%', xs: '40%' } }}
            />
            <Button variant="contained" sx={{ height: '100%', mt: 4, ml: 1 }}>
              저장
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResearchField;
