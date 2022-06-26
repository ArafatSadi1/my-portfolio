import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import wave from "../images/wave.svg";

export const Contact = () => {
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
    <div className="pt-8 bg-zinc-100">
      <h2 className="text-left text-5xl ml-8 py-12 font-serif">Contact me</h2>
      <div
      className="py-8 px-4 lg:px-0"
        style={{
          backgroundImage: `url(${wave})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          className="flex flex-col max-w-sm mx-auto"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            class="input input-bordered input-primary w-full max-w-sm"
          />
          <label className="text-white">Email</label>
          <input
            type="email"
            name="user_email"
            class="input input-bordered input-primary w-full max-w-sm"
          />
          <label className="text-white">Message</label>
          <textarea
            name="message"
            class="textarea textarea-bordered textarea-primary w-full max-w-sm"
          />
          <input
            type="submit"
            value="Send"
            className="btn btn-secondary mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
