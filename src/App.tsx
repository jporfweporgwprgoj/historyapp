import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './shared/components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
