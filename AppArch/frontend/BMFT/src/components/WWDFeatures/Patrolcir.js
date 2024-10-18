import React from "react";
import styles from '../styles/patrolcir.module.css';

const Patrolcir = () => {
  const bubbleData = [
    { title: "Protect", image: "https://link-to-your-image/Fist.jpg" },
    { title: "Preserve", image: "https://link-to-your-image/Tree.jpg" },
    { title: "Inspire", image: "https://link-to-your-image/Hand.jpg" },
  ];

  return (
    <div className={styles.bubbleContainer}>
      {bubbleData.map((bubble, index) => (
        <div key={index} className={styles.bubble}>
          <img src={bubble.image} alt={bubble.title} className={styles.bubbleImage} />
          <h3 className={styles.bubbleTitle}>{bubble.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Patrolcir;

