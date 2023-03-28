import React from "react";
import './style.css'

const year = new Date().getFullYear();

function Footer() {
  return <footer><p style={{ fontFamily: 'cursive' }}>Copyright © {year}</p></footer>;
}

export default Footer;