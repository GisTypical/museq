import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex w-full place-items-center p-3">
      <h1 className="flex-1 font-heading font-extrabold italic ml-32 text-2xl text-hotmagenta">
        Museq
      </h1>
      <div className="flex-1 flex flex-row-reverse mr-32 space-x-12 space-x-reverse">
        <Link to="/signup">
          <p>Registrarse</p>
        </Link>
        <Link to="/login">
          <p>Iniciar sesión</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
