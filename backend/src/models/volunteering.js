import { number, object } from 'yup';
import EventSchema from './event';

export default object({
  event: EventSchema,
  hours: number().integer().min(0).required(),
})