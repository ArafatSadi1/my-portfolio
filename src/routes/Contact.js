import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

export const Contact = () => {
  const handleLinkedIn = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };
  const handleFb = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };
  const handleGithub = () => {
    const url = "https://www.linkedin.com/in/yasin-arafat-370b5b219/";
    window.open(url, "_blank");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o9c3ufn",
        "template_i8d5q0c",
        form.current,
        "qF-Usj3inVWcOhfUj"
      )
      .then(
        (result) => {
          console.log("email sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-zinc-100 h-full lg:h-screen">
      <p className="font-serif pt-16 ml-2 flex items-center uppercase">
        <span>
          <AiOutlineLine />
        </span>
        Say hello
      </p>
      <h2 className="text-left text-4xl ml-8 pb-12 font-serif uppercase">
        Contact
      </h2>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-8 px-4 lg:px-12">
        <div className="w-full lg:w-2/5">
          <p>
            If you ever want to grab a coffee (virtually) or just want a quick
            chat - you can find me on social media or you can send me a message
            here!
          </p>
          <div className="flex items-center justify-evenly my-6">
            <button className="text-3xl text-blue-600 hover:text-blue-700" onClick={handleLinkedIn}>
              <FaLinkedin />
            </button>
            <button className="text-3xl text-blue-600 hover:text-blue-700" onClick={handleFb}>
              <FaFacebookSquare />
            </button>
            <button className="text-3xl text-blue-600 hover:text-blue-700" onClick={handleGithub}>
              <FaGithubSquare />
            </button>
          </div>
          <p>
            You can also email me directly at
            <a href="mailto:arafatsadi1@gmail.com" className="underline hover:underline-offset-4 ml-2">arafatsadi1@gmail.com</a>
          </p>
        </div>
        <form
          className="flex flex-col gap-3 w-full lg:w-1/2 mx-auto py-8 lg:py-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="name"
            class="input input-bordered input-primary w-full"
          />
          <input
            type="email"
            name="user_email"
            placeholder="email"
            class="input input-bordered input-primary w-full"
          />
          <textarea
            name="message"
            placeholder="message"
            class="textarea textarea-bordered textarea-primary w-full"
          />
          <input
            type="submit"
            value="Send message"
            className="btn btn-primary w-32 rounded-tr-none rounded-bl-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
