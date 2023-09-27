import { useParams } from 'react-router-dom';
import housings from '../data/logements.json';

export const HousingDetails = () => {
  const { id } = useParams();
  const details = housings.find((el) => el.id === id);
  return <div>{details.title}</div>;
};
