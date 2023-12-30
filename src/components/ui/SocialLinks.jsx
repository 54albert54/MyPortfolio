import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

// eslint-disable-next-line no-sparse-arrays


const SocialLinks = ({ className, classMobile}) => {
  let styles = "w-6 fill-black h-6"
  if (classMobile){
    styles = classMobile
  }
  
  
  const socialLinks = [
    {
      name: "Github",
      path: "https://github.com/54albert54",
      icon: <IoLogoGithub className={styles} />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/angel-bernechea",
      icon: <IoLogoLinkedin className={`${styles} fill-blue-600`} />,
    }
  ];
  return (
    <nav className={className}>
      {socialLinks.map((link, index) => (
        <a className={classMobile && classMobile} key={index} target="_blank" href={link.path}>
          {link.icon}
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
