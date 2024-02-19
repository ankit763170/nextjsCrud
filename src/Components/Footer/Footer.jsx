import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ankitdev</div>
      <div className={styles.text}>
        Ankit creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
