import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Divider } from "@mui/material";

/**
 *@author Eunsang-Lim, dmstkd2905@naver.com
 *@date 2022-04-16
 *@description 현재 페이지의 경로
 */

export default function Breadcrumb({ main, sub }) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
      {main}
    </Link>,
    <Typography key="2" color="text.primary">
      {sub}
    </Typography>,
  ];

  return (
    <div>
      <Divider />
      <Breadcrumbs
        sx={{ my: 1, justifyContent: "center", display: "flex" }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Divider />
    </div>
  );
}
