import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="h-20 bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg flex justify-between items-center">
      <section className="ml-9 h-full flex justify-center items-center">
        <img src="/logo.jpeg" alt="logo" className="rounded-full h-16 w-16" />
      </section>
      <section className="w-1/2 h-20 flex flex-row justify-end items-center">
        <li className="list-none p-4 text-lg text-white font-bold cursor-pointer">
          Tabela de produtos
        </li>
        <li className="list-none p-4 text-lg text-white font-bold cursor-pointer">
          Login
        </li>
      </section>
    </nav>
  );
};

export default Header;
