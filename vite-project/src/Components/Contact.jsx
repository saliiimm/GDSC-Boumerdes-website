import { useFormik } from "formik";
import { basicSchema } from "../schemas/besicSchema";
import gdscboum from "../assets/gdscboum.png";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Contact = () => {
  const style = {
    input:
      "w-[302px] lg:w-[472px] med:w-[472px]  p-[0.8rem]   m-2 text-[1rem] text-[#00000080] shadow-lg shadow-gray-500/50 rounded-[15px] bg-white outline-none border-2  focus:border-blue-500 placeholder-[#00000080] ",
    para: "ml-5  mt-[-10px] text-[#fc8181]",
    message: "h-[243px]  ",
    button:
      "bg-[#FBBC04] lg:w-[472px] med:w-[472px] w-[302px] h-[60px] ml-2 mt-2 rounded-[15px] uppercase text-white font-bold text-[18px] opacity-35",
    input_error: "border-[#fc8181]",
    contact:
      " text-[#FBBC04]  capitalize font-semibold text-[30px] md:text-[58px] text-center  py-[5%]",
    form: " flex items-center justify-center flex-col md:mr-4",
    welcomepara:
      "w-[300px] md:text-[15px] md:ml-[-5%]  md:text-left text-center lg:text-[16px] lg:text-left xl:w-[450px]   mb-[50px] ",
    pic: "xl:w-[340px]  md:w-[260px]  w-[200px] ml-[40px] medi:w-[250px]",
    all: "flex flex-col-reverse   justify-center items-center md:flex-row md:justify-around   xl:w-[1200px] md:ml-[5%] ",
  };

  const handleSubmite = () => {
    const recipientEmail = "gdsc@univ-boumerdes.dz";
    const subject = "Contact Form";
    const body = ` ${values.name}\n ${values.message}`;
    const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="pb-[200px]">
      <h1 className={style.contact}>contact us</h1>
      <div className={style.all}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            handleSubmite(e);
          }}
          autoComplete="off"
          className={style.form}>
          <input
            value={values.name}
            onChange={handleChange}
            id="name"
            type="name"
            placeholder="Full name"
            onBlur={handleBlur}
            className={` ${
              errors.name && touched.name ? style.input_error : ""
            } ${style.input}`}
          />

          {errors.name && touched.name && (
            <p className={style.para}>{errors.name}</p>
          )}

          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Email"
            onBlur={handleBlur}
            className={` ${
              errors.name && touched.name ? style.input_error : ""
            } ${style.input}`}
          />
          {errors.email && touched.email && (
            <p className={style.para}>{errors.email}</p>
          )}

          <textarea
            value={values.message}
            onChange={handleChange}
            id="message"
            type="text"
            placeholder="Message"
            onBlur={handleBlur}
            className={`  ${
              errors.message && touched.message ? style.input_error : ""
            } ${style.input} ${style.message}`}
          />

          {errors.message && touched.message && (
            <p className={style.para}>{errors.message}</p>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className={style.button}>
            send
          </button>
        </form>
        <div>
          <p className={style.welcomepara}>
            We value your input and welcome your questions, ideas, or messages.
            Our team is here to assist with any inquiries or concerns you may
            have. Don't hesitate to reach out via our contact form for prompt
            assistance and communication.
          </p>

          <img src={gdscboum} alt="" className={style.pic} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
