import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <div>
      <PageNav />
      <h1>Worldwise here</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default Homepage;
