import { useParams } from 'react-router-dom';

export const HousingDetails = ({ title }) => {
  const { id } = useParams();
  return <div>Id logement : {id}</div>;
};
