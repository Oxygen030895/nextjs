import Navbar from "../components/Navbar";
import Styles from "../styles/index.module.css";

const index = () => {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.brand_box}>
          <Navbar />
        </div>
        <div className={Styles.text_box}>
          <h1 className={Styles.heading_primary}>
            <span className={Styles.heading_primary_main}>
              Welcome to the world of reacts
            </span>
            <span className={Styles.thapatext}>love with Javascript</span>
          </h1>
          <a
            href="#"
            className={
              "${Styles.btn} ${Styles.btn_white} ${Styles.btn_animated}"
            }
          >
            By Cahyo
          </a>
        </div>
      </header>
    </>
  );
};

export default index;
