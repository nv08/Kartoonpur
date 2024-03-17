import MainImage from "./MainImage";
import "./index.css";
import { SocialIcon } from "react-social-icons";

const CONTACT_DETAILS = [
  {
    title: "Junglepur Facebook Page",
    link: "https://www.facebook.com/profile.php?id=61554700345276&mibextid=kFxxJD",
    icon: (
      <SocialIcon url="https://www.facebook.com/profile.php?id=61554700345276&mibextid=kFxxJD" />
    ),
  },
  {
    title: "Junglepur Youtube Channel",
    link: "https://www.youtube.com/@KaarToon-G",
    icon: <SocialIcon url="https://www.youtube.com/@KaarToon-G" />,
  },
  {
    title: "Junglepur Contact Email 1",
    link: "mailto: kaartoon.g@gmail.com",
    icon: <SocialIcon url="mailto:kaartoon.g@gmail.com" />,
  },
  {
    title: "Junglepur Contact Email 2",
    link: "mailto: junglepur.pr@gmail.com",
    icon: <SocialIcon url="mailto:junglepur.pr@gmail.com" />,
  },
];

const Contact = () => {
  return (
    <>
      <MainImage />
      <div className="link-wrapper">
        {CONTACT_DETAILS.map((contact, key) => (
          <a
            key={key}
            className="icon-wrapper"
            href={contact.link}
            target="_blank"
          >
            {contact.icon}
            {contact.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Contact;
