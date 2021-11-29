import { useEffect } from "react";
import { useRouter } from "next/router";

const PortfolioPage = (): JSX.Element => {

  const {query, pathname} = useRouter();

  useEffect(() => {
    console.log(query);
    console.log(pathname);
  }, [query, pathname]);

  return (
    <div>
      pathname : {query["portfolioId"]}
    </div>
  );
};

export default PortfolioPage;