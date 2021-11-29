import { getAllEvents } from "../../dummyData";
// list
import { EventList } from "../../components/events/EventList";

const EventsHomePage = (): JSX.Element => {

  // data
  const events = getAllEvents();

  return (
    <div>
      <EventList eventData={events}/>
    </div>
  );
};

export default EventsHomePage;