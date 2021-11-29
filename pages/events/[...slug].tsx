import { useRouter } from "next/router";

const EventSlugPage= (): JSX.Element => {

  // router
  const {query} = useRouter();

  return (
    <div>
      Event with id {query["slug"]}
    </div>
  );
};

export default EventSlugPage;