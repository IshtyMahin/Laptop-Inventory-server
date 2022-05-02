import React from "react";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer id="footer" className="text-center bg-dark text-white d-flex flex-column align-items-center py-3">
      <p> <small>Copyright &copy; {year} Ishty.All right reserved</small></p>
      
    </footer>
  );
};

export default Footer;