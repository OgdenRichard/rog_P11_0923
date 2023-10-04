import { Navigate, useParams } from 'react-router-dom';
import housings from '../data/logements.json';
import { Slider } from '../components/Slider';

export const HousingDetails = () => {
  const { id } = useParams();
  const details = housings.find((el) => el.id === id);
  const slides = details ? details.pictures : [];
  return (
    <>
      <main>
        {slides.length ? (
          <Slider slides={slides} />
        ) : (
          <Navigate to={'notfound'} />
        )}
      </main>
    </>
  );
};
