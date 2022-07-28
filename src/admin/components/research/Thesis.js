import * as React from 'react';
import { Button, Grid, Box } from '@mui/material';

const Thesis = () => {
  return (
    <div>
      <Grid container>
        <Grid justifyContent="flex-end" alignItems="flex-start">
          <Box border={1}>
            <Button variant="contained">등록하기</Button>
            <Button variant="outlined">검색</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Thesis;
