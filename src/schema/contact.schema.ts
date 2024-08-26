import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
})

export default ContactSchema;