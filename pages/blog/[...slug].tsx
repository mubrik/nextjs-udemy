import { useEffect } from "react";
import { useRouter } from "next/router";

const BlogSlugPage = (): JSX.Element => {

  const {query, pathname} = useRouter();

  useEffect(() => {
    console.log(query);
    console.log(pathname);
  }, [query, pathname]);

  return (
    <div>
      the blog with slug : {query["slug"]}
    </div>
  );
};

export default BlogSlugPage;