import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="py-8 bg-blue-50">
        <h2 className="text-5xl font-bold text-center py-8">Contact me</h2>
      <form className="flex flex-col max-w-sm mx-auto" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          class="input input-bordered input-primary w-full max-w-sm"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          class="input input-bordered input-primary w-full max-w-sm"
        />
        <label>Message</label>
        <textarea
          name="message"
          class="textarea textarea-bordered textarea-primary w-full max-w-sm"
        />
        <input type="submit" value="Send" className="btn btn-primary mt-4" />
      </form>
    </div>
  );
};

export default Contact;
