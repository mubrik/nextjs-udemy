// material
import { Stack } from "@mui/material";
// type
import { IEvent } from "../../types/dataTypes";
// event
import {EventItem} from "./EventItem";

interface IEventListProps {
  eventData: IEvent[]
}

const EventList = ({eventData}: IEventListProps) : JSX.Element => {

  return(
    <Stack spacing={2} alignItems={"center"}>
      {eventData.map((event) => <EventItem key={event.id} eventData={event}/> )}
    </Stack>
  );
};

export default EventList;