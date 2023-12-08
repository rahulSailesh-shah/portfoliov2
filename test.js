// Navbar.js

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-gray-800 p-4">
      <div className="flex flex-col">
        <a
          href="#"
          className="text-white hover:text-gray-300 hover:line-through mb-4 transition duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 hover:line-through mb-4 transition duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 hover:line-through mb-4 transition duration-300"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 hover:line-through mb-4 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
