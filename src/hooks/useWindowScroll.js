import { useState, useEffect } from "react";

export default function useWindowScroll(key) {
  const [show, handleShow] = useState(key);
  console.log(window.scrollY);
  const srollable = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", srollable);
    return () => {
      window.removeEventListener("scroll", srollable);
    };
  }, []);

  return [show, handleShow];
}
