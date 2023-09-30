import SvgColor from '../../../components/svg-color';


const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'View Employee',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Add Employee',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  
  {
    title: 'Leaves Requests',
    path: '/dashboard/LeaveRequest',
    icon: icon('ic_blog'),
  },

  {
    title: 'Add Events',
    path: '/dashboard/AddEvent',
    icon: icon('ic_blog'),
  },
  
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
