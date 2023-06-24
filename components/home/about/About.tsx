import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi, I&apos;m Oluwatoyin Olaoye, a skilled software developer specializing in Ruby, JavaScript, React,
              and Ruby on Rails. With 2 years worth of experience in 1 year,I excel in building robust web applications.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I thrive in collaborative environments, utilizing strong communication skills to deliver exceptional results.
              Proficient in backend development with Ruby, I also create captivating user interfaces using JavaScript and React.
              I am well-versed in the entire development lifecycle, from conceptualization to deployment.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I prioritize clean and maintainable code, following best practices and test-driven development. I am
              adaptable and embrace agile methodologies to meet changing requirements and deliver high-quality software.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I&apos;m picking up concepts about design and Data Structures, or you could check for me at The Emirate Stadium. 
              I am probably enjoying Football in England. 🤓
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to merge my passion for learning new things and my love for solving problems. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>We can connect via </span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};