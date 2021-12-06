import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
// material
import { Stack, Typography} from "@mui/material";
// server
import { getEventById, getEventsByTimePeriod } from "../../server/server-utils";
// types
import { IEvent } from "../../types/dataTypes";
// custom comps
import EventList from "../../components/events/EventList";


// props
interface IAppProps {
  events: IEvent[];
  hasError: boolean;
}

const EventSlugPage: NextPage<IAppProps> = ({events, hasError}) => {

  if (hasError) {
    // notify user
    return(
      <Stack alignItems={"center"}>
        <div> Error occured, check dates </div>
      </Stack>
    );
  }

  return (
    <Stack alignItems={"center"}>
      <div> Filtered events</div>
      <EventList eventData={events}/>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  const type = query["type"];
  // obj
  let events: IEvent[] = [];

  if (type === "filter") {
    try {
      // option a
      const fromDate = new Date(query["fromDate"] as string);
      const toDate = new Date(query["toDate"] as string);
  
      const _events = await getEventsByTimePeriod(fromDate, toDate);
      events = [..._events];
  
      // option b
      // build from other query slug/?
      console.log(query);
      
    } catch (error) {
      // pass error to react in normal app
      console.log(error);
      return {
        props: {
          hasError: true
        }
      };
    }
  }

  return {
    props: {
      events: events,
    }
  };

};

export default EventSlugPage;