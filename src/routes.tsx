import { RouteObject } from 'react-router-dom';
import App from './App';
import LandingPage from './features/landingPage/LandingPage';
// import { EmptyScreen } from './components/404/EmptyScreen';
// import AuthRoute from './components/auth/AuthRoute';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      // { path: '*', element: <EmptyScreen /> },
    ],
  },
];

export default routes;
