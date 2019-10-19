import React from "react";
import { AUTHOR } from "../../constants";

export default function Footer () {
  return (
    <footer>
      <div className="email">
        My contacts : <span>{AUTHOR.EMAIL}</span>
      </div>
    </footer>
  )
};