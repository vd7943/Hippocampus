import React from "react";

const ContactForm = () => {
  return (
    <div
      className="text-[#FFFFFF] rounded-3xl px-6 py-10 max-w-7xl mx-10 my-16"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <h2 className="text-3xl md:text-4xl font-medium text-center tracking-wide">
        Have a project idea? Schedule a call with us!
      </h2>
      <p className="text-center mt-2 text-lg md:text-xl tracking-normal">
        Shoot us an email with your request, and we will connect you within one
        business day.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 pb-4 px-8">
        <input
          type="text"
          placeholder="Name *"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70"
        />
        <textarea
          placeholder="Message *"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70 md:row-span-2"
          rows={4}
        ></textarea>

        <input
          type="email"
          placeholder="E-mail *"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70"
        />
        <input
          type="text"
          placeholder="Company"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70"
        />
        <input
          type="text"
          placeholder="Linkedin-Telegram *"
          className="p-3 rounded-md w-full border border-white bg-transparent text-white placeholder-white/70"
        />

        <div className="md:col-span-3 flex flex-col gap-4">
          <label className="flex items-start gap-3 text-lg leading-snug tracking-wide text-white">
            <input
              type="checkbox"
              className="w-7 h-7 cursor-pointer border border-white accent-black"
            />
            <span>
              I consent to Aetsoft JSC processing my personal information as set
              out in the <span className="font-semibold">Privacy Policy</span>{" "}
              and <span className="font-semibold">Cookie Policy</span> and that,
              given the global nature of Aetsoft JSC business, such processing
              may take place outside of my home jurisdiction.
            </span>
          </label>

          <button
            type="submit"
            className="w-fit bg-[#D9D9D9] text-[#12123B] text-md px-6 py-2 rounded-full cursor-pointer hover:opacity-90"
          >
            GET A FREE CONSULTION
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
