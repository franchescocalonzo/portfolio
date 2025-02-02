"use client";
import Image from "next/image";

import { ShiveringText } from "@/components/TypeEffect";
export default function About() {
  return (
    <>
      <section className="pb-2" id="about" aria-label="About me">
        <p className="animation-delay-500 mb-4 animate-blur pt-24 text-sm leading-relaxed text-slate-500">
          Growing up, my fascination with technology never faded—it only grew
          stronger. That passion led me to software development, where I found
          excitement in getting the answers to the whys and hows.
          <span className="block h-3" />
          My journey began as a Quality Assurance intern at{" "}
          <a
            className="font-medium text-slate-700 hover:text-slate-800"
            href="https://cormant.io/"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Go to Cormant Technologies official website"
          >
            Cormant Technologies
          </a>{" "}
          , where I got my first exposure to software development. That
          experience sharpened my attention to detail, strengthened my critical
          thinking, and gave me the opportunity to be a part of the
          collaborative process of building and maintaining software
          applications.
          <span className="block h-3" />
          Fast forward to today, I have the privilege of maintaining and
          improving software at{" "}
          <a
            className="font-medium text-slate-700 hover:text-slate-800"
            href="https://www.bayad.com/"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Go to Bayad Center official website"
          >
            CIS Bayad Center Inc.
          </a>{" "}
          I love seeing my work and designs come to life — it&apos;s the most
          rewarding part of the process for me.
          <span className="block h-3" />
          When I&apos;m not working, you&apos;ll find me hanging out with my
          girlfriend, driving around in search of cozy cafés, spending time with
          my family and mah dogs, or dominating in Dota.
        </p>
      </section>
    </>
  );
}
