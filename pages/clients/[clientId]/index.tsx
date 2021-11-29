import { useEffect } from "react";
import { useRouter } from "next/router";

const SingleClientPage = (): JSX.Element => {

  const {query, pathname} = useRouter();

  useEffect(() => {
    console.log(query);
    console.log(pathname);
  }, [query, pathname]);

  return (
    <div>
      the client with id : {query["clientId"]}
    </div>
  );
};

export default SingleClientPage;