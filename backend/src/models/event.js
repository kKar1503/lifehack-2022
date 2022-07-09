import { array, date, number, object, string } from "yup";

export default object({
  organiser: string().required(),
  attendees: array().of(string()),
  slots: number().integer().min(0).required(),
  start_date: date().required(),
  end_date: date().required(),
  description: string().notRequired()
});