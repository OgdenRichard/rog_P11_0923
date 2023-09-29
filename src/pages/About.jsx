import about from '../assets/images/about.jpg';

export const About = () => {
  return (
    <>
      <main>
        <div className="about_page">
          <div className="about_banner">
            <img src={about} alt="vallée dans les montagnes" />
          </div>
        </div>
      </main>
    </>
  );
};
