import { useParams } from 'react-router-dom';
import housings from '../data/logements.json';
import { Slider } from '../components/Slider';
import { Tag } from '../components/atoms/Tag';
import { ErrorPage } from './ErrorPage';

export const HousingDetails = () => {
  const { id } = useParams();
  const details = housings.find((el) => el.id === id);
  return (
    <>
      <main>
        {details ? (
          <>
            <Slider slides={details.pictures} />
            <div className="details_wrapper">
              <h1>{details.title}</h1>
              <p>{details.location}</p>
              <div className="tags_container">
                {details.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <ErrorPage />
        )}
      </main>
    </>
  );
};
