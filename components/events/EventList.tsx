// material
import { Stack } from "@mui/material";
// type
import { IEvent } from "../../types/dataTypes";
// event
import {EventItem} from "./EventItem";

interface IAppProps {
  eventData: IEvent[]
}

const EventList = ({eventData}: IAppProps) : JSX.Element => {

  return(
    <Stack spacing={2} alignItems={"stretch"}>
      {eventData.map((event) => <EventItem key={event.id} eventData={event}/> )}
    </Stack>
  );
};

export default EventList;