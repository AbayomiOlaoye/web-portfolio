import { MdOutlineWbSunny } from "react-icons/md"; 
import { MdOutlineLocalPostOffice } from "react-icons/md"; 
import { MdOutlineFolderSpecial } from "react-icons/md"; 
import { MdOutlineDomain } from "react-icons/md"; 
import { MdOutlineRecommend } from "react-icons/md"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import logo from "../../public/oat-logo.png";
import { set } from "animejs";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    }

    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

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
    <div className={styles.div}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        {/* <span className={styles.logo} onClick={() => {
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
        </span> */}
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
          {innerWidth < 768 ? <AiOutlineUser /> : 'About'}
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#skills"
          onClick={() => {
            setSelected("skills");
          }}
          className={selected === "skills" ? styles.selected : ""}
        >
          {innerWidth < 768 ? <MdOutlineWbSunny /> : 'Skills'}
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => setSelected("projects")}
          className={selected === "projects" ? styles.selected : ""}
        >
          {innerWidth < 768 ? <MdOutlineFolderSpecial /> : 'Projects'}
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#experience"
          onClick={() => setSelected("experience")}
          className={selected === "experience" ? styles.selected : ""}
        >
          {innerWidth < 768 ? <MdOutlineDomain /> : 'Exp.'}
        </motion.a>
        {/* <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#recommendations"
          onClick={() => setSelected("recommendations")}
          className={selected === "recommendations" ? styles.selected : ""}
        >
          {innerWidth  < 768 ? <MdOutlineRecommend /> : 'Rec.'}
        </motion.a> */}
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? styles.selected : ""}
        >
          {innerWidth < 768 ? <MdOutlineLocalPostOffice /> : 'Contact'}
        </motion.a>
      </motion.nav>
    </div>
  );
};