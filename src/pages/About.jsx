import about from '../assets/images/about.jpg';
import { Collapse } from '../components/Collapse';

export const About = () => {
  return (
    <>
      <main>
        <div className="about_page">
          <div className="about_banner">
            <img src={about} alt="vallée dans les montagnes" />
          </div>
          <Collapse title={'bonjour'} />
        </div>
      </main>
    </>
  );
};
