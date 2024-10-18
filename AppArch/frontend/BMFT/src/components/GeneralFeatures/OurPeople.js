import React from 'react';
import styles from "../styles/ourpeople.module.css";

const OurPeople = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src="https://your-google-photos-url/Topstaff.JPG" alt="Header" />
        <h1 className={styles.titleoverlay}>Our People</h1>
      </header>
      
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Our Team</h2>
          <p>
            Our team at the Belize Maya Forest Trust (BMFT) is a dedicated group of staff, rangers, and outsourced professionals, all united by a shared commitment to preserving the Belize Maya Forest. With a diverse range of expertise, we work collaboratively to protect the forest's rich biodiversity and cultural heritage, ensuring its sustainability and resilience for future generations.
          </p>
          <a href="/ourteam" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img src="https://your-google-photos-url/WWAboard.jpg" alt="Our Team" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src="https://your-google-photos-url/Vol.jpg" alt="Volunteers and Interns" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Supporters and Partners</h2>
          <p>
            Supporters and partners are essential to the Belize Maya Forest Trust (BMFT), providing crucial resources and expertise that empower us to safeguard the Belize Maya Forest. Their involvement ensures the effective management and protection of this vital ecosystem, which supports diverse wildlife, sustains vital water sources, and preserves cultural heritage. Through their support, we can advance our conservation efforts, engage communities, and foster sustainable practices, ensuring the forest’s health and vitality for generations to come.
          </p>
          <a href="/volunteers" className={styles.outreachButton}>See More</a>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
