import {IEvent} from "../../dummyData";
// event
import {EventItem} from "./EventItem";

interface IEventListProps {
  eventData: IEvent[]
}

const EventList = ({eventData}: IEventListProps) : JSX.Element => {

  return(
    <>
    {eventData.map((event) => <EventItem key={event.id} eventData={event}/> )}
    </>
  );
};

export {EventList};