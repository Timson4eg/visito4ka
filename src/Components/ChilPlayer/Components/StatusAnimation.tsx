import styles from "../stylePlayer.module.scss";

interface StatusAnimationProps {
  isPlaying: boolean;
}

const StatusAnimation = ({ isPlaying = false }: StatusAnimationProps) => {
  //   if (!isPlaying) return null;
  return (
    <div
      className={`${styles.wrapper} ${
        isPlaying ? styles.visible : styles.hidden
      }`}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default StatusAnimation;
