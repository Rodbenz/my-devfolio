import IconExternal from "./external";
import IconFacebook from "./facebook";
import IconGithub from "./github";
import IconInstagram from "./instagram";
import IconMail from "./mail";
import IconTwitter from "./twitter";
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
