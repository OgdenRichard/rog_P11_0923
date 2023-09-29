import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <>
      <main>
        <div className="error_page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link>Retourner sur la page d'acceuil</Link>
        </div>
      </main>
    </>
  );
}
