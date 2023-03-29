import { useEffect } from "react";
import { Helmet } from "react-helmet";

function NoPage() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>BrandMobile - Error page</title>
      </Helmet>
      <div className="error-page">
        <h1>Woops! Error</h1>
      </div>
    </>
  );
}

export default NoPage;
