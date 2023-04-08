import React from "react";
import Logo from "../assets/logo.svg";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="py-8" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            {/* <img src={Logo} alt="logo" /> */}
            <h2 className="text-gradient text-3xl">TÚ ANK</h2>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  );
}
