import { Navigate, useParams } from 'react-router-dom';
import housings from '../data/logements.json';

export const HousingDetails = () => {
  const { id } = useParams();
  console.log(id);
  const details = housings.find((el) => el.id === id);
  return (
    <>{details ? <div>{details.title}</div> : <Navigate to={'notfound'} />}</>
  );
};
