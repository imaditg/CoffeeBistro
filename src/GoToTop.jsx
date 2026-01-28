import  { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#c19b77',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        display: visible ? 'inline' : 'none',
        zIndex: 1000,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        width:'50px',
      }}
    >
      {/* ↑ Top */}
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
