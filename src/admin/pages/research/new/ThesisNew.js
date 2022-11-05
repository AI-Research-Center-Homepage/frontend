import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { changeMainHeaderContext } from "../../../AdminMain";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-30
 *@description 논문을 추가하는 등록창
 */

export default function ThesisNew() {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 논문 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  });

  return (
    <ResearchRegisterForm
      researchType="thesis"
      pageType="new"
      dirType="research"
    />
  );
}
