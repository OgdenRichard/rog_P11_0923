import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ErrorPage } from './pages/ErrorPage';
import { Root } from './layouts/Root';
import './style/App.css';
import { HousingDetails } from './pages/HousingDetails';
import { useEffect } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={'housings'} />} />
      <Route path="housings" element={<Home />} />
      <Route path="housings/:id" element={<HousingDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
  { basename: process.env.PUBLIC_URL },
);

function App() {
  useEffect(() => {
    document.title = 'Kasa';
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
