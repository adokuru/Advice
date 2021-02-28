import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <p>
        © 2021{" "}
        <a target='_blank' rel='noreferrer' href='https://danoitech.com'>
          David@Danoitech!
        </a>{" "}
        - this is a cool advice app!
      </p>
    </div>
  );
}

export default Footer;
