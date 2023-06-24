import styles from "./heading.module.scss";
import Image from "next/image";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import logo from "../../public/oat-logo.png";

// const wole = "https://img.buymeacoffee.com/button-api/?text=Gift me a coffee&emoji=&slug=mindprepdev&button_colour=40DCA5&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00";

export const Heading = () => {
  // const myLoader=(ai)=>{
  //   return ai;
  // }

  return (
    <header className={styles.heading}>
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

      <MyLinks />
     <div className={styles.headingButtons}>

        <OutlineButton onClick={() => window.open("/Oluwatoyin_Olaoye's_Resume.pdf")}>
          My resume
        </OutlineButton>
      </div>
    </header>
  );
};
