import { Label } from "flowbite-react"
import PrimaryForm from "../components/forms/PrimaryForm"
import TextInput from "../components/forms/TextInput"
import Textarea from "../components/forms/Textarea"
import FormButton from "../components/forms/FormButton"
import { FaFacebookF, FaLinkedinIn, FaPaperPlane, FaPhone, FaUpwork, FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5"
import { LuMail } from "react-icons/lu";
import common from "../assets/data/common.json"
import SocialButton from "../components/Buttons/SocialButton"

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col p-10 mt-[700px]">
      <h1 className="text-5xl font-bold mb-16">Contact Me:</h1>
      <div className="flex gap-2 w-full">
        <PrimaryForm className="py-7">
          <h3 className="text-primary-200 font-bold text-3xl mb-4 text-center">Let&apos;s work together!</h3>
          <div className="w-full flex gap-2 my-4">
            <div className="flex-1">
              <Label>Name:</Label>
              <TextInput />
            </div>
            <div className="flex-1">
              <Label>Email:</Label>
              <TextInput />
            </div>
          </div>
          <div className="flex-1 my-4">
            <Label>Message:</Label>
            <Textarea />
          </div>
          <FormButton
            type="submit"
            className="my-4"
          >
            <FaPaperPlane /> Send
          </FormButton>
        </PrimaryForm>
        <div className="flex-1 flex flex-col gap-10 justify-center items-center w-full">
          <ul className="flex flex-col gap-5 self-center">
            <li className="flex items-center gap-3">
              <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] text-primary-200 text-2xl">
                <FaPhone />
              </div>
              <a href={`tel:${common.phone}`} className="hover:text-primary-200 transition-colors duration-300">{common.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] text-primary-200 text-2xl">
                <LuMail />
              </div>
              <a href={`mailto: ${common.email}`} className="hover:text-primary-200 transition-colors duration-300">{common.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] text-primary-200 text-2xl">
                <IoLocationSharp />
              </div>
              <p>{common.address}</p>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3">
            <SocialButton 
              icon={<FaFacebookF />}
              link={common.social.facebook}
            />
            <SocialButton 
              icon={<FaLinkedinIn />}
              link={common.social.linkedin}
            />
            <SocialButton 
              icon={<FaUpwork />}
              link={common.social.upwork}
            />
            <SocialButton 
              icon={<FaXTwitter />}
              link={common.social.twitterX}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact