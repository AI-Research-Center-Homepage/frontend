import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { changeMainHeaderContext } from "../../../AdminMain";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-30
 *@description 프로젝트를 추가하는 등록창
 */

export default function ProjectNew() {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 프로젝트 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  });

  return <ResearchRegisterForm researchType="project" pageType="new" />;
}
