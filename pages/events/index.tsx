import type { NextPage, GetStaticProps } from 'next';
// material
import { Stack } from '@mui/material';
// server
import { getAllEventsArray } from '../../server/server-utils';
import { IEvent } from '../../types/dataTypes';
// custom
import EventList from "../../components/events/EventList";

// prop type
interface IAppProps {
  events: IEvent[];
}

const EventsHomePage: NextPage<IAppProps> = ({events}) => {

  return (
    <Stack spacing={2} alignItems={"center"}>
      <div> Featured Events </div>
      <EventList eventData={events}/>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // get data
  const _events = await getAllEventsArray();

  // filter
  const _featuredEvents = _events.filter(event => event.isFeatured);

  return {
    props: {
      events: _featuredEvents
    }
  };
};

export default EventsHomePage;