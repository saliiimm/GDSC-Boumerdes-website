import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("please enter your email"),
  name: yup.string().required("please enter your name"),
  message: yup.string().required("please enter your message"),
});
