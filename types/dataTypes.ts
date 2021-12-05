// holds general data types

// for object with unknown keys
export type MyObject<T= unknown> = Record<string, T>;

// for an event item
export interface IEvent {
  id?: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image?: string;
  isFeatured: boolean;
}