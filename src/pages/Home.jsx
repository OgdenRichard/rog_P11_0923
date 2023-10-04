import { Outlet } from 'react-router-dom';
import { HousingCard } from '../components/HousingCard';
import home from '../assets/images/home.jpg';
import housings from '../data/logements.json';
import { Banner } from '../components/Banner';

export const Home = () => {
  return (
    <>
      <main>
        <Banner title={'Chez vous, partout et ailleurs'} image={home} />
        <div className="housing_wrapper">
          {housings.map((housing) => (
            <HousingCard
              key={housing.id}
              id={housing.id}
              title={housing.title}
              cover={housing.cover}
            />
          ))}
        </div>
      </main>
      <Outlet />
    </>
  );
};
