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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={'housing'} />} />
      <Route path="housing" element={<Home />} />
      <Route path="housing/:id" element={<HousingDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
