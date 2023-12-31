/* eslint-disable */
import React, { useState } from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import ContactForm from "./Form";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/oluwatoyinolaoye"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="https://twitter/olaoyeelijah" target="_blank" rel="nofollow">
              Twitter
            </Link>{" "}
            if that&apos;s more your space ✨
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="#" onClick={toggleFormVisibility}>
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="100%">
          
          {showForm ? (
            <ContactForm toggleFormVisibility={toggleFormVisibility} />
          ) : <div />}
        </Reveal>
      </div>
    </section>
  );
};