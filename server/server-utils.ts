// functions for server fetching
// types
import { IEvent, MyObject } from "../types/dataTypes";

export const getAllEvents = async ():Promise<MyObject<IEvent>> => {

  const response = await fetch("https://sample-sales-nextjs-01-default-rtdb.europe-west1.firebasedatabase.app/events.json");

  const result: MyObject<IEvent> = await response.json();

  if ("error" in result) {
    // do something
    return {};
  }

  return result;
};

export const getAllEventsArray = async ():Promise<IEvent[]> => {
  // make array
  const _eventsArray = [];
  // get events
  const _events = await getAllEvents();
  // loop events, push
  for (const [key, value] of Object.entries(_events)) {
    _eventsArray.push({
      id: key,
      ...value
    });
  }
  // return
  return _eventsArray;
};

export const getEventById = async (id:string): Promise<IEvent|null> =>  {

  // get events
  const _events = await getAllEventsArray();

  const _event = _events.find((event) => event.id === id);

  if (_event) {
    return _event;
  }
  return null;
};