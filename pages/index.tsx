// next
import type { NextPage, GetStaticProps } from 'next';
import Head from "next/head";
import { NextLinkComposed } from '../utils/NextLink';
// material
import { Stack, Button } from '@mui/material';
// server
import { getAllEventsArray } from '../server/server-utils';
import { IEvent } from '../types/dataTypes';
// custom
import EventList from "../components/events/EventList"; 
import FilterEvent from "../components/events/FilterEvent";

// prop type
interface IAppProps {
  events: IEvent[];
}

const Home: NextPage<IAppProps> = ({events}) => {

  return (
    <Stack spacing={2} alignItems={"center"}>

      <div> All Events </div>
      <Head>
        <title> All Events </title>
        <meta 
          name="description"
          content="Find alot of events"
        />
      </Head>
      <FilterEvent/>
      <EventList eventData={events}/>
      <Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: "/events"
        }}
      >
        events page
      </Button>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // get data
  const _events = await getAllEventsArray();

  return {
    props: {
      events: _events
    },
    revalidate: 20
  };
};

export default Home;