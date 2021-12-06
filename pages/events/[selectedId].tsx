// next
import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
// material
import { Stack, Typography} from "@mui/material";
// server
import { getEventById } from "../../server/server-utils";
// types
import { IEvent } from "../../types/dataTypes";
// app props type
interface IAppProps {
  event: IEvent;
}

const EventSinglePage: NextPage<IAppProps> = ({event}) => {

  // router
  // const {query} = useRouter();
  // // get event
  // const event = getEventById(query["selectedId"] as string);

  return (
    <>
    {
      event ? 
      <Stack>
        <Typography variant="h6"> {event.title} </Typography>
        <Typography variant="body1"> {event.description} </Typography>
        <Typography variant="body1"> {event.location} </Typography>
        <Typography variant="subtitle1"> {event.date} </Typography>
      </Stack>
      : <div> event not found</div>
    }
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  // get item|null
  const _event = await getEventById(query["selectedId"] as string);

  return {
    props: {
      event: _event,
    }
  };

};

export default EventSinglePage;