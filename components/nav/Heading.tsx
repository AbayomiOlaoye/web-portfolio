import styles from "./heading.module.scss";
import Image from "next/image";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
     <div className={styles.headingButtons}>

        <OutlineButton onClick={() => window.open("/Oluwatoyin_Olaoye's_Resume.pdf")}>
          My resume
        </OutlineButton>
        <a href="https://www.buymeacoffee.com/mindprepdev" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/arial-violet.png"
            alt="Buy Me A Coffee"
            style={{
              height: "46px !important",
              width: "185px !important",
            }}
          />
        </a>
      </div>
    </header>
  );
};
