"use client";
import scrollElementToIdMinusHeight from "@/utils/scrollToElement";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CarBatteryIcon } from "./Icons";
import {
  BriefcaseIcon,
  Code2Icon,
  HomeIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [toggleIcon, setToggleIcon] = useState<string>();

  const menus = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      id: "about",
      label: "About Me",
      icon: <Code2Icon />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <BriefcaseIcon />,
    },
    {
      id: "contact",
      label: "Contact Me",
      icon: <MailIcon />,
    },
  ];

  useEffect(() => {
    if (currentTheme === "dark") {
      setToggleIcon("sun");
    } else {
      setToggleIcon("moon");
    }
  }, [currentTheme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    if (storedTheme === "dark") {
      setToggleIcon("sun");
    } else {
      setToggleIcon("moon");
    }
  }, []);

  return (
    <header className="fixed top-0 z-30 w-full border-t-8 border-red-400 bg-white shadow-xl dark:bg-slate-900">
      <div className="container relative mx-auto flex items-center justify-between overflow-hidden px-5 py-3 md:py-3">
        <div className="rounded-md bg-red-400 p-2 text-xl text-white">
          <CarBatteryIcon size={24} />
        </div>
        <div className="flex items-center gap-7">
          <ul className="fixed bottom-0 left-0 right-0 z-50 grid w-full grid-cols-4 gap-2 border-t-2 border-slate-100 bg-white p-3 text-center text-xs font-bold shadow-lg dark:border-slate-700 dark:bg-slate-900 md:relative md:flex md:gap-7 md:border-none md:bg-transparent md:text-base md:shadow-none">
            {menus.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => scrollElementToIdMinusHeight(menu.id, 68)}
                  className="menu flex w-full flex-col items-center transition hover:text-red-400"
                >
                  <div className="icon mb-1 rounded-sm px-5 py-1.5 text-lg text-slate-400 transition md:!hidden">
                    {menu.icon}
                  </div>
                  <span className="block">{menu.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <motion.button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="rounded-sm bg-slate-100 p-2 text-xl text-red-400 dark:bg-slate-800"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {toggleIcon === "sun" ? (
              <SunIcon size={24} />
            ) : (
              <MoonIcon size={24} />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
