import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills & Expertise</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Jest</span>
            <span className="chip">Rspec</span>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Redux</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Ruby</span>
            <span className="chip">Ruby on Rails</span>
            <span className="chip">GitHub</span>
            <span className="chip">GitLab</span>
            <span className="chip">Remote Collaboration</span>
            <span className="chip">Agile</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Fun & Interest</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Native</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Django</span>
            <span className="chip">Python</span>
            <span className="chip">Gatsby</span>
            <span className="chip">Material UI</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">Web3 Tools</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Heroku</span>
            <span className="chip">C</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};