import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ms6jssr",
        "template_yyl43gl",
        {
          from_name: form.name,
          to_name: "Hawraa",
          from_email: form.email,
          to_email: "hawraayounes0@gmail.com",
          message: form.message,
        },
        "H7xmfpq0rPZAK1hw0"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            `Thank you ${form.name}. I will get back to you as soon as possible!`
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>{" "}
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>{" "}
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>{" "}
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-violet-700 rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
