import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import constants from "../constants/constants"
import { FaXTwitter } from "react-icons/fa6"

const socialLinksList = [
  {
    icon: <FaFacebook />,
    url: constants.FACEBOOK_URL,
  },
  {
    icon: <FaLinkedin />,
    url: constants.LINKEDIN_URL,
  },
  {
    icon: <FaXTwitter />,
    url: "",
  },
  {
    icon: <FaGithub />,
    url: constants.GITHUB_URL,
  }
]

const SocialMediaGroup = () => {
  return (
    <div className="flex flex-col gap-2">
      {socialLinksList.map((item, index) => (
        <a href={item.url} key={index} className="text-blue-500">
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialMediaGroup