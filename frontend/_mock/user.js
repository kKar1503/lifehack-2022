import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: index,
  avatarUrl: `/static/mock-images/avatars/avatar_1.jpg`,
  name: 'Fake name',
  company: 'Fake company',
  isVerified: index % 3 == 0,
  status: 'active',
  role: sample([
    'Overworked Developer'
  ]),
}));

export default users;
