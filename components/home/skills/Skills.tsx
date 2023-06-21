import React from 'react';
import { FaProductHunt } from "react-icons/fa"; 
import { AiFillDatabase } from "react-icons/ai"; 
import { SiBackendless, SiCodingninjas } from "react-icons/si"; 
import styles from './skills.module.scss';
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader title="Skills" dir="r" />

      <div className={styles.statColumn}>
        <Reveal>
          <div className={styles.statColumn}>
            <h3 className="section-title">
              <SiCodingninjas size="3rem" color="var(--brand)" />
              <span>Front-end & Design Skills</span>
            </h3>
            <div className={styles.statGrid}>
              <span className="chip">JavaScript</span>
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">Redux</span>
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">Bootstrap</span>
              <span className="chip">Tailwind</span>
              <span className="chip">Material UI</span>
              <span className="chip">SASS</span>
              <span className="chip">Figma</span>
              <span className="chip">Adobe XD</span>
              <span className="chip">Sketch</span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.statColumn}>
            <h3 className="section-title">
              <SiBackendless size="3rem" color="var(--brand)" />
              <span>Backend</span>
            </h3>
            <div className={styles.statGrid}>
              <span className="chip">Ruby</span>
              <span className="chip">Ruby on Rails</span>
              <span className="chip">JavaScript</span>
              <span className="chip">Rspec</span>
              <span className="chip">Next.js</span>
              <span className="chip">Python</span>
              <span className="chip">Django</span>
            </div>
          </div>
        </Reveal>
        <Reveal>
        <div className={styles.statColumn}>
          <h3 className="section-title">
            <AiFillDatabase size="3rem" color="var(--brand)" />
            <span>Database & Testing</span>
          </h3>
          <div className={styles.statGrid}>
              <span className="chip">Jest</span>
              <span className="chip">Rspec</span>
              <span className="chip">Capybara</span>
              <span className="chip">Selenium</span>
              <span className="chip">React Testing Library</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">MySQL</span>
              <span className="chip">MongoDB</span>
              <span className="chip">SQLite</span>
              <span className="chip">REST API&apos;s</span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.statColumn}>
            <h3 className="section-title">
              <FaProductHunt  size="3rem" color="var(--brand)" />
              <span>Professional & Soft Skills</span>
            </h3>
            <div className={styles.statGrid}>
              <span className="chip">Problem Solving</span>
              <span className="chip">Communication</span>
              <span className="chip">Continuous Learning</span>
              <span className="chip">Git</span>
              <span className="chip">GitHub</span>
              <span className="chip">GitHub CLI</span>
              <span className="chip">GitLab</span>
              <span className="chip">Remote work experience</span>
              <span className="chip">Team player</span>
              <span className="chip">Mentorship</span>
              <span className="chip">Creative thinker</span>
              <span className="chip">Vercel</span>
              <span className="chip">Heroku</span>
              <span className="chip">Remote Collaboration</span>
              <span className="chip">Agile</span>
              <span className="chip">Scrum</span>
              <span className="chip">Netlify</span>
              <span className="chip">TDD</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}