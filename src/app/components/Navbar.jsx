import React from "react";

function Navbar() {
  return (
    <nav className="h-16">
      <section className="bg-white bg-opacity-50 backdrop-blur-md p-4 text-gray-800 flex items-center fixed w-full z-10 shadow-xl">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-xl font-bold">JS Tigers</h1>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
