import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="mainError">
      <h1 className="mainError__h1">
        Error 404: Lo sentimos, no hemos podido encontrar la página que buscas
      </h1>
      <Link className="detail" to="/">
        {" "}
        Haz click aquí para seguir buscando tus personajes{" "}
      </Link>
    </main>
  );
};

export default Error404;
