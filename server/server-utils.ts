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
  // filter event
  const _event = _events.find((event) => event.id === id);

  if (_event) {
    return _event;
  }
  return null;
};

export const getEventsByTimePeriod = async (dateA: Date, dateB: Date): Promise<IEvent[]|[]> =>  {

  // get events
  const _events = await getAllEventsArray();
  // filter event
  const _event = _events.filter((event) => {
    const res = dates.inRange(event.date, dateA, dateB);
    // error check
    if (typeof res === "number") {
      // throw an error?
      return false;
    }

    return res;
  });

  if (_event) {
    return _event;
  }
  return [];
};

type dateString = "year" | "month" | "date"
type dateParam = Date | number[] | number | string | Record<dateString, number>

// Source: http://stackoverflow.com/questions/497790
const dates = {
  convert: function(date: dateParam) {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp) 
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
      date.constructor === Date ? date :
      date.constructor === Array ? new Date(date[0],date[1],date[2]) :
      date.constructor === Number ? new Date(date) :
      date.constructor === String ? new Date(date) :
      (typeof date === "object" && "year" in date) ? new Date(date.year, date.month, date.date) :
      NaN
    );
  },
  compare: function(dateA:dateParam, dateB:dateParam) {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    // NOTE: The code inside isFinite does an assignment (=).
    const _dateA = this.convert(dateA).valueOf();
    const _dateB = this.convert(dateB).valueOf();

    return (
      isFinite(_dateA) &&
      isFinite(_dateB) ?
      +(_dateA >_dateB) - +(_dateA < _dateB) :
      NaN
    );
  },
  inRange: function(date:dateParam, start:dateParam, end:dateParam) {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    // NOTE: The code inside isFinite does an assignment (=).
    const _date = this.convert(date).valueOf();
    const _start = this.convert(start).valueOf();
    const _end = this.convert(end).valueOf();

    return (
      isFinite(_date) &&
      isFinite(_start) &&
      isFinite(_end) ?
      _start <= _date && _date <= _end :
      NaN
    );
  }
};