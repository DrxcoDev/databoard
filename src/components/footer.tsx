import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-lg font-bold">Databoard Company</h2>
            <p>76 Avn Colón, Valencia, ES</p>
            <p>databoardteam@outlook.es</p>
            <p></p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0">
            <h2 className="text-lg font-bold">Links</h2>
            <ul className="list-none">
              <li><a href="/" className="text-white hover:underline">Home</a></li>
              <li><a href="/dashboard" className="text-white hover:underline">Dashboard</a></li>
              <li><a href="#" className="text-white hover:underline">Services</a></li>
              <li><a href="#" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
