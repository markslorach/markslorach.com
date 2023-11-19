"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgtubji",
        "template_81vydfh",
        form.current,
        "44h51U632nK1tw_-X"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Thanks! I'll be in touch soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex gap-0 sm:gap-8 flex-wrap sm:flex-nowrap text-white/90 text-base font-light tracking-wide">
      <aside className="w-full sm:w-1/2 dark-text-primary mb-16 sm:mb-0">
        <h2 className="text-base font-light text-white/70">
          I'm always happy to chat so please feel free to fill in the contact
          form or reach out on{" "}
          <Link
            href={"https://www.linkedin.com/in/markslorach/"}
            target="_blank"
          >
            <strong className="text-gradient text-gradient-hover font-semibold text-highlight">
              LinkedIn
            </strong>
          </Link>
          .
        </h2>
      </aside>

      <form
        className="flex flex-col gap-5 dark-text-primary w-full sm:w-1/2 mt-1"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-2">
          <label
            id="sender name"
            className="tracking-wide font-light leading-none text-white/70"
          >
            Name
          </label>
          <input
            className="w-full h-10 px-4 rounded-sm bg-white/10"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            id="sender email address"
            className="tracking-wide font-light leading-none text-white/70"
          >
            Email
          </label>
          <input
            className="w-full h-10 px-4 rounded-sm bg-white/10"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            id="sender message"
            className="tracking-wide font-light leading-none text-white/70"
          >
            Message
          </label>
          <textarea
            className="w-full h-36 p-4 rounded-sm bg-white/10"
            name="message"
            required
          />
        </div>
        <div className="flex flex-start">
        <button
          aria-label="send email"
          className="text-base font-light leading-none tracking-wide text-white/70 hover:text-white/90 cursor-pointer"
        >
          <input type="submit" value="Send" />
        </button>
        </div>
      </form>
    </div>
  );
};
