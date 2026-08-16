import React from "react";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#0B1E41] py-24">
      <div className="container-wide">

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-7 py-14 text-center shadow-2xl sm:px-14">

          <MessageCircle className="mx-auto h-12 w-12 text-[#8CC63E]" />

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to build a better workflow for your practice?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need a mobile app, website or a complete practice management solution, let's discuss what your practice needs.
          </p>

          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#376D0E] px-7 py-4 font-bold text-white shadow-xl transition hover:bg-white hover:text-[#0B1E41]"
          >
            <MessageCircle className="h-5 w-5" />
            Request a Free Consultation
          </a>

        </div>

      </div>
    </section>
  );
}