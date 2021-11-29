import { useRouter } from "next/router";
// data
import { getEventById } from "../../dummyData";
// material
import { Stack, Typography} from "@mui/material";

const EventSinglePage = (): JSX.Element => {

  // router
  const {query} = useRouter();
  // get event
  const event = getEventById(query["selectedId"] as string);

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

export default EventSinglePage;