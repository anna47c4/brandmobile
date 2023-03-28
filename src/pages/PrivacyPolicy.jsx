import React from "react";
import { useEffect } from "react";
function PrivacyPolicy() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>PrivacyPolicy</div>;
}

export default PrivacyPolicy;
