import { Link } from 'react-router-dom';

export const HousingCard = ({ id, title, cover }) => {
  return (
    <>
      <Link to={`${id}`}>
        <figure
          className="housing__card"
          style={{
            gridArea: 'image',
            backgroundImage: `url(${cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </>
  );
};
