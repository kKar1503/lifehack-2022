// import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'Cleaning one-room apartments',
  'Meal distribution for foreign workers',
  'Helping out at hospital',
  'Walk dogs from SPCA',
  'Six Socks Studio',
  'Cleaning one-room apartments',
  'Meal distribution for foreign workers',
  'Helping out at hospital',
  'Walk dogs from SPCA',
  'Six Socks Studio',
  'Cleaning one-room apartments',
  'Meal distribution for foreign workers',
  'Helping out at hospital',
  'Walk dogs from SPCA',
  'Six Socks Studio',
  'Cleaning one-room apartments',
  'Meal distribution for foreign workers',
  'Helping out at hospital',
  'Walk dogs from SPCA',
  'Cleaning one-room apartments',
  'Meal distribution for foreign workers',
  'Helping out at hospital',
  'Walk dogs from SPCA',
  'Six Socks Studio',
];

const posts = [...Array(23)].map((_, index) => ({
  id: 123213421,
  cover: `/static/mock-images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: '25th December 1999',
  view: 10,
  comment: 10,
  share: 10,
  favorite: 10,
  author: {
    name: "Solo Renekton Only",
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
