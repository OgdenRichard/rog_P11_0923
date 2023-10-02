import about from '../assets/images/about.jpg';
import { Collapse } from '../components/Collapse';

export const About = () => {
  const options1 = ['lorem ipsum', 'salut', 'yeeepeee'];
  const options2 = ['truc', 'truc'];
  const options3 = ['bidule', 'machin', 'chose'];
  return (
    <>
      <main>
        <div className="about_page">
          <div className="about_banner">
            <img src={about} alt="vallée dans les montagnes" />
          </div>
          <Collapse title={'bonjour'} options={options1} />
          <Collapse title={'héhéhé'} options={options2} />
          <Collapse title={'hahaha'} options={options3} />
        </div>
      </main>
    </>
  );
};
