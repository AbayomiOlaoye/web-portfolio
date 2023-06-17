import styles from "./heading.module.scss";
import Image from "next/image";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

// const wole = "https://img.buymeacoffee.com/button-api/?text=Gift me a coffee&emoji=&slug=mindprepdev&button_colour=40DCA5&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00";

export const Heading = () => {
  // const myLoader=(ai)=>{
  //   return ai;
  // }

  return (
    <header className={styles.heading}>
      <MyLinks />
     <div className={styles.headingButtons}>

        <OutlineButton onClick={() => window.open("/Oluwatoyin_Olaoye's_Resume.pdf")}>
          My resume
        </OutlineButton>
        {/* <a href="https://www.buymeacoffee.com/mindprepdev" target="_blank">
          <Image
            className={styles.profile}
            loader={myLoader}
            alt="Buy me a coffee tag"
            src={wole}
            width="185"
            height="46"
          />
        </a> */}
      </div>
    </header>
  );
};
