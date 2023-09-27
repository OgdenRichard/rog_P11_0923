import { Link } from 'react-router-dom';

export const HousingCard = ({ id, title }) => {
  return (
    <>
      <Link to={`housing/${id}`}>
        <div>{title}</div>
      </Link>
    </>
  );
};
