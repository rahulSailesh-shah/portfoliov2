// Navbar.js
import NavItem from "./NavItem";
import { Logo } from "./Logo";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const navItems = ["projects", "work", "about"];
  return (
    <nav className="flex flex-row justify-end ">
      <div className="md:hidden cursor-pointer z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>

      <div className="fixed left-0 top-0 h-full bg-[#111111] w-32 md:flex hidden flex-col justify-between ">
        <div>
          <a
            href="#home"
            className="flex ml-3 my-10 justify-center items-center"
          >
            <Logo />
          </a>
          <div className="flex -rotate-90 mt-80">
            <div className="flex flex-col mb-6 md:flex-row md:mb-0 text-[#cdcdcd] justify-center items-center">
              <a
                href="/resume.pdf"
                download="Rahul_Shah_Resume.pdf"
                className="cursor-pointer relative group px-2 mx-2 text-base font-medium capitalize"
              >
                Resume
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-[#6E92F3] scale-0 transition-transform duration-300 group-hover:scale-100"></span>
              </a>
            </div>
            {navItems.map((item) => (
              <NavItem key={item} title={item} />
            ))}
          </div>
        </div>

        <div className="">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
