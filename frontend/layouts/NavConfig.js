// component

import { Forward } from "@mui/icons-material";

// ----------------------------------------------------------------------

// const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
const getIcon = (name) => <Forward />;

const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
