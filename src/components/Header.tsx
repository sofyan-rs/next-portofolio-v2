"use client";
import scrollElementToIdMinusHeight from "@/utils/scrollToElement";
import { faCarBattery, faMoon, faHome, faCode, faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const menus = [
    {
      id: "home",
      label: "Home",
      icon: faHome
    },
    {
      id: "about",
      label: "About Me",
      icon: faCode
    },
    {
      id: "projects",
      label: "Projects",
      icon: faBriefcase
    },
    {
      id: "contact",
      label: "Contact Me",
      icon: faEnvelope
    },
  ];

  return (
    <header className="bg-white shadow-xl border-t-8 border-red-400 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center p-5 relative overflow-hidden md:py-3">
        <div className="bg-red-400 text-xl text-white p-2 rounded-md">
          <FontAwesomeIcon icon={faCarBattery} fixedWidth />
        </div>
        <div className="flex items-center gap-7">
          <ul className="left-0 right-0 bottom-0 bg-white p-4 border-t-2 border-gray-100 text-xs shadow-lg text-center fixed z-50 w-full grid grid-cols-4 gap-2 font-bold md:relative md:flex md:text-base md:bg-transparent md:shadow-none md:border-none md:gap-7">
            {menus.map((menu) => (
              <li key={menu.id}>
                <button onClick={() => scrollElementToIdMinusHeight(menu.id, 80)} className="menu hover:text-red-400 transition flex flex-col items-center w-full">
                  <FontAwesomeIcon icon={menu.icon} fixedWidth className="icon text-lg text-gray-400 px-5 py-1.5 rounded-sm mb-1 transition md:hidden" />
                  <span className="block">{menu.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <button className="text-red-400 bg-gray-100 p-1 text-xl rounded-sm">
            <FontAwesomeIcon icon={faMoon} fixedWidth />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;