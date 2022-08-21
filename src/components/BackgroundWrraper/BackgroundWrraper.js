import React from "react";
import './BackgroundWrraper.css';

const BackgroundWrraper = ({ children }) => {
  return (
    <section className='bg-wrraper'>{children}</section>
  );
}

export default BackgroundWrraper;
