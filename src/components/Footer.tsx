import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faDiscord, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { myContacts } from '@/data/data';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const mySosmed = [
    {
      id: 'linkedin',
      icon: faLinkedin,
      url: myContacts.linkedin
    },
    {
      id: 'instagram',
      icon: faInstagram,
      url: myContacts.instagram
    },
    {
      id: 'github',
      icon: faGithub,
      url: myContacts.github
    },
  ];
    
  return (
    <footer id='contact' className="mb-[75px] md:mb-0 bg-white border-t-4 border-red-400 dark:bg-slate-900">
      <div className="container mx-auto px-5">
        <div className="py-10 flex place-content-between">
          <div>
            <h3 className="font-semibold text-xl mb-4"><span className='pb-1 border-b-4 border-dotted border-red-400 inline-block'>Contact Me</span></h3>
            <ul className='flex flex-col gap-1'>
              <li><FontAwesomeIcon icon={faEnvelope} fixedWidth className='text-red-400' /> {myContacts.email}</li>
              <li><FontAwesomeIcon icon={faWhatsapp} fixedWidth className='text-red-400' /> {myContacts.phone}</li>
              <li><FontAwesomeIcon icon={faDiscord} fixedWidth className='text-red-400' /> {myContacts.discord}</li>
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='flex flex-col gap-3 md:flex-row text-lg'>
              {mySosmed.map((sosmed) => (
                <a key={sosmed.id} className="block bg-red-400 text-white px-2 py-0.5 rounded-sm" href={sosmed.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={sosmed.icon} fixedWidth />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 border-t-4 border-slate-100 border-dashed text-sm flex place-content-between dark:border-slate-800">
          <span>Copyright © {year}</span>
          <span>Created with <FontAwesomeIcon icon={faHeart} fixedWidth className="text-red-400" /> by Me</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;