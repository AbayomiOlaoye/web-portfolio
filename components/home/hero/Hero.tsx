import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/oat_bg.png";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          {/* <Reveal> */}
            <h1 className={styles.title}>
              Hi, I&apos;m Oluwatoyin<span>.</span>
            </h1>
          {/* </Reveal>
          <Reveal> */}
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Full-Stack Developer</span>
            </h2>
          {/* </Reveal>
          <Reveal> */}
            <p className={styles.aboutCopy}>
              I&apos;ve spent this past <span>1</span> year coding for over <span>6000+</span> hours, building, and shipping over
              <span> 30</span> projects with Vanilla JavaScript, React, Ruby, Ruby on Rails as group projects, for
              some pretty cool companies, and individuals to match up to <span>3</span> years industry experience. 
              I also create interesting self projects in my spare time, and I am always open to opportunities.
              Let&apos;s connect!
            </p>
          {/* </Reveal>
          <Reveal> */}
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          {/* </Reveal> */}
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Oluwatoyin Olaoye | Full-Stack Software Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      {/* <DotGrid /> */}
    </section>
  );
};