import { useEffect } from "react";
function NoPage() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <p>wooops.... error!</p>;
}

export default NoPage;
