import avatar_img from '../../assets/images/default_avatar.png';

export const Portrait = ({ host }) => {
  const landlord_names = host.name
    ? host.name.split(' ')
    : ['Propriétaire', 'anonyme'];
  const landlord_portrait = host.picture ? host.picture : avatar_img;
  console.log(host.name.split(' '));
  return (
    <div className="portrait_container">
      <div>
        <p>{landlord_names[0]}</p>
        <p>{landlord_names[1]}</p>
      </div>
      <figure
        className="portrait"
        style={{
          backgroundImage: `url(${landlord_portrait})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#C4C4C4',
        }}
      ></figure>
    </div>
  );
};
