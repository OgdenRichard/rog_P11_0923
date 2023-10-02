import about from '../assets/images/about.jpg';
import { Collapse } from '../components/Collapse';

export const About = () => {
  const options1 = [
    'lorem ipsum',
    'dolor sit amet',
    'consectetur adipiscing elit',
  ];
  const options2 = ['sed do eiusmod tempor'];
  const options3 = ['incididunt ut labore', 'et dolore magna aliqua'];
  const options4 = ['ut enim ad minim veniam', 'quis nostrud exercitation'];
  return (
    <>
      <main>
        <div className="about_page">
          <div className="about_banner">
            <img src={about} alt="vallée dans les montagnes" />
          </div>
          <div className="about_wrapper">
            <Collapse title={'Fiabilité'} options={options1} />
            <Collapse title={'Respect'} options={options2} />
            <Collapse title={'Service'} options={options3} />
            <Collapse title={'Sécurité'} options={options4} />
          </div>
        </div>
      </main>
    </>
  );
};
