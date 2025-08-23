import { motion, useScroll, useTransform } from "framer-motion";
// import "./styleHeader.scss";
import styles from "./styleHeader.module.scss";

const Header = () => {
  const { scrollY } = useScroll();

  const raw = useTransform(scrollY, [0, 100], [40, 20]);

  const width = useTransform(raw, (vw) => {
    const px = (vw / 100) * window.innerWidth;
    return px < 600 ? "600px" : `${vw}vw`;
  });

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-100 px-6 py-2">
      <motion.div
        style={{
          width,
        }}
        className="frame"
      >
        <div className={styles.underBg}></div>
        <div className={styles.glow}></div>
        <div className={styles.content}>
          <ul className="relative z-10 flex gap-6 px-6 py-2 font-bold text-black">
            <li className=" ">
              <a href="#about" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="#stack" className="nav-link">
                Stack
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
