import { myContacts } from "@/data/data";
import {
  GithubIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { DiscordIcon, WhatsAppIcon } from "./Icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const mySosmed = [
    {
      id: "linkedin",
      icon: <LinkedinIcon size={20} />,
      url: myContacts.linkedin,
    },
    {
      id: "instagram",
      icon: <InstagramIcon size={20} />,
      url: myContacts.instagram,
    },
    {
      id: "github",
      icon: <GithubIcon size={20} />,
      url: myContacts.github,
    },
  ];

  return (
    <footer
      id="contact"
      className="mb-[75px] border-t-4 border-red-400 bg-white dark:bg-slate-900 md:mb-0"
    >
      <div className="container mx-auto px-5">
        <div className="flex place-content-between py-10">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              <span className="inline-block border-b-4 border-dotted border-red-400 pb-1">
                Contact Me
              </span>
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex flex-row items-center gap-2">
                <MailIcon size={20} className="inline-block text-red-400" />
                {myContacts.email}
              </li>
              <li className="flex flex-row items-center gap-2">
                <WhatsAppIcon size={20} className="inline-block text-red-400" />
                {myContacts.phone}
              </li>
              <li className="flex flex-row items-center gap-2">
                <DiscordIcon size={20} className="inline-block text-red-400" />
                {myContacts.discord}
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-3 text-lg md:flex-row">
              {mySosmed.map((sosmed) => (
                <a
                  key={sosmed.id}
                  className="block rounded-sm bg-red-400 px-2 py-1.5 text-white"
                  href={sosmed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sosmed.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex place-content-between border-t-4 border-dashed border-slate-100 py-4 text-sm dark:border-slate-800">
          <span>Copyright © {year}</span>
          <span>
            Created with{" "}
            <HeartIcon
              size={20}
              className="inline-block fill-red-400 text-red-400"
            />{" "}
            by Me
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
