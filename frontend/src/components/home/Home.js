import React from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Sidebar from "./Sidebar";
import Homeview from "./Homeview";
const Home = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="grid grid-cols-sidebar">
      <Sidebar url={url}></Sidebar>
      <Route exact path={path} component={Homeview}></Route>
      <Route path={`${path}/favorites`}>Vista favoritos</Route>
      <Route path={`${path}/playlist`}>Vista playlist</Route>
      <Route path={`${path}/search`}>Vista busqueda</Route>
    </div>
  );
};

export default Home;
