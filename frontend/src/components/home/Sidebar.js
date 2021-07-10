import React from "react";

import { NavLink } from "react-router-dom";

const Sidebar = ({ url }) => {
  return (
    <aside className="text-center flex flex-col my-10 space-y-6">
      <h1 className="font-heading font-extrabold italic text-2xl text-hotmagenta">
        Museq
      </h1>
      <NavLink
        activeClassName="text-hotmagenta font-bold"
        exact={true}
        to={`${url}`}
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="text-hotmagenta font-bold"
        to={`${url}/favorites`}
      >
        Favoritos
      </NavLink>
      <NavLink
        activeClassName="text-hotmagenta font-bold"
        to={`${url}/playlist`}
      >
        Playlists
      </NavLink>
      <NavLink activeClassName="text-hotmagenta font-bold" to={`${url}/search`}>
        Búsqueda
      </NavLink>
    </aside>
  );
};

export default Sidebar;
