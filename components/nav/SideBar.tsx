import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import logo from "../../public/oat-logo.png";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{background: "var(--background-dark)"}}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span className={styles.logo} onClick={() => {
          document.location.hash === "" ?
          document.getElementById("main")?.scrollIntoView() :
          document.location.hash = '';
          }}>
            <Image
              src={logo}
              alt={`my ${logo} project featured image`}
              width={50}
              height={50}
              style={{
                maxWidth: '100% !important',
                maxHeight: '100% !important',
              }}
              />
        </span>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          className={selected === "about" ? styles.selected : ""}
        >
          About
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => setSelected("projects")}
          className={selected === "projects" ? styles.selected : ""}
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#experience"
          onClick={() => setSelected("experience")}
          className={selected === "experience" ? styles.selected : ""}
        >
          Exp.
        </motion.a>
        {/* <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#recommendations"
          onClick={() => setSelected("recommendations")}
          className={selected === "recommendations" ? styles.selected : ""}
        >
          Recomm.
        </motion.a> */}
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? styles.selected : ""}
        >
          Contact
        </motion.a>
      </motion.nav>
    </div>
  );
};