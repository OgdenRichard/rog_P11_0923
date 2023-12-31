import PropTypes from 'prop-types';
import avatar_img from '../assets/images/default_avatar.png';

export const Host = ({ host }) => {
  const landlord_names = host.name
    ? host.name.split(' ')
    : ['Propriétaire', 'Anonyme'];
  const landlord_portrait = host.picture ? host.picture : avatar_img;
  return (
    <>
      {host && (
        <div className="host_details">
          <div className="host_names">
            {landlord_names.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
          <figure
            className="host_portrait"
            style={{
              backgroundImage: `url(${landlord_portrait})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#C4C4C4',
            }}
          ></figure>
        </div>
      )}
    </>
  );
};

Host.propTypes = {
  host: PropTypes.object.isRequired,
};
