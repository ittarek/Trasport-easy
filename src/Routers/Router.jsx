import App from '@/App';
import { HomeLayout } from '@/Layouts/HomeLayout/HomeLayout';
import { Home } from '@/Pages/Home/Home';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>Error</div>,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
