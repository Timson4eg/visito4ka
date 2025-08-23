import styles from "../stylePlayer.module.scss";

const AnimationEqualize = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ visibility: isPlaying ? "visible" : "hidden" }}
    >
      <span className={`${styles.bar} ${styles.glowBar}`}></span>
      <span className={`${styles.bar} ${styles.glowBar}`}></span>
      <span className={`${styles.bar} ${styles.glowBar}`}></span>
      <span className={`${styles.bar} ${styles.glowBar}`}></span>
      <span className={`${styles.bar} ${styles.glowBar}`}></span>
    </div>
  );
};

export default AnimationEqualize;
