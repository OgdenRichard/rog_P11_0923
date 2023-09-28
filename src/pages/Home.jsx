import { Outlet } from 'react-router-dom';
import { HousingCard } from '../components/HousingCard';
import housings from '../data/logements.json';

export const Home = () => {
  return (
    <>
      <main>
        {housings.map((housing) => (
          <HousingCard key={housing.id} id={housing.id} title={housing.title} />
        ))}
      </main>
      <Outlet />
    </>
  );
};
