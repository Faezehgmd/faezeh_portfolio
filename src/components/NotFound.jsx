import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>صفحه‌ای که دنبال آن هستید وجود ندارد.</p>

      <a href="/" className="back-home">
        Back To Home
      </a>
    </section>
  );
}

export default NotFound;