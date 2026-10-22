"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submissionInFlight = useRef(false);
  const isSubmitting = status === "sending";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionInFlight.current) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    for (const name of ["email", "subject", "message"]) {
      data.set(name, String(data.get(name) || "").trim());
    }

    if (["email", "subject", "message"].some((name) => !data.get(name))) {
      setErrorMessage("Please enter your email, a subject, and a message.");
      setStatus("error");
      return;
    }

    submissionInFlight.current = true;
    setStatus("sending");
    setErrorMessage("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: controller.signal,
      });

      if (!response.ok) {
        setErrorMessage(response.status === 429
          ? "Too many messages were submitted. Please wait a few minutes and try again, or email me directly."
          : "Your message could not be submitted. Please try again or email me directly.");
        setStatus("error");
        return;
      }

      // A successful response may have an empty or non-JSON body.
      setStatus("success");
    } catch (error) {
      setErrorMessage(error.name === "AbortError"
        ? "The request timed out, so I couldn’t confirm your message was sent. Please try again or email me directly."
        : "I couldn’t confirm your message was sent. Please check your connection and try again, or email me directly.");
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      submissionInFlight.current = false;
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Based in Salt Lake City, Utah. Reach out to talk about distributed
          systems, data infrastructure, backend engineering, or a potential
          collaboration.
        </p>
        <a href="mailto:aditya.c.gowda@gmail.com" className="inline-block text-sky-400 hover:underline break-all mb-4">
          aditya.c.gowda@gmail.com
        </a>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/ACprime96" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/acprime96/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {status === "success" ? (
          <div>
            <p role="status" className="text-green-500 text-sm mt-2">
              Thanks! Your message was submitted successfully.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-sky-400 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            action="https://getform.io/f/alljqowa"
            method="POST"
            className="flex flex-col"
            aria-busy={isSubmitting}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                disabled={isSubmitting}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                disabled={isSubmitting}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                disabled={isSubmitting}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {status === "error" && (
              <p role="alert" className="text-red-400 text-sm mb-4">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-wait text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
