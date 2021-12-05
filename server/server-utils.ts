// functions for server fetching
// types

export const getAllEvents = async ():Promise<any> => {

  const response = await fetch("https://sample-sales-nextjs-01-default-rtdb.europe-west1.firebasedatabase.app/events.json");

  const result = await response.json();


};