import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { changeMainHeaderContext } from "../../../AdminMain";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-30
 *@description 데모를 추가하는 등록창
 */
const DemoNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 데모 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  });

  return <ResearchRegisterForm researchType="demo" pageType="new" />;
};

export default DemoNew;
