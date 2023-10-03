import { Link } from 'react-router-dom';

export const HousingCard = ({ id, title, cover }) => {
  return (
    <>
      <figure className="housing__card">
        <Link to={`${id}`}>
          <img src={cover} alt="" />
        </Link>
      </figure>
    </>
  );
};
