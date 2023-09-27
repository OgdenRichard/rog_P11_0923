import { useRouteError } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.status}</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
