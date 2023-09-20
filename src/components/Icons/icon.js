import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconFacebook,
} from "@/components/Icons/page";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "facebook":
      return <IconFacebook />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
