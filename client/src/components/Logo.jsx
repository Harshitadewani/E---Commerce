import React from "react";
import { Link } from "react-router-dom";
import Magnet from "../utils/Magnet";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <Magnet>
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 w-full object-contain cursor-pointer "
        />
      </Magnet>
    </Link>
  );
};

export default Logo;
